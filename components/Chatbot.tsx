import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';
import type { ChatMessage } from '../types';
import { ChatBubbleIcon, CloseIcon, SendIcon } from './Icons';

// NOTE: This is a placeholder for a real API key, which should be
// handled securely. For this example, we're assuming it's available.
const API_KEY = process.env.API_KEY;
if (!API_KEY) {
  console.warn("API_KEY is not set. Chatbot will not function.");
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (API_KEY) {
        const ai = new GoogleGenAI({ apiKey: API_KEY });
        chatRef.current = ai.chats.create({
            model: 'gemini-2.5-flash',
            config: {
                systemInstruction: "You are a friendly, helpful, and knowledgeable assistant for Muktar Abdella's personal portfolio website. Your goal is to answer questions about Muktar's skills, experience, projects, and services based on the information available on his portfolio. Be conversational and professional. If you don't know an answer, say so politely. Keep your answers concise and to the point.",
            },
        });
    }

    // Initialize with a welcome message
    setMessages([
      {
        role: 'model',
        parts: "Hello! I'm Muktar's AI assistant. How can I help you today? Feel free to ask about his projects, skills, or experience.",
      },
    ]);
  }, []);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);


  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || !chatRef.current) return;

    const userMessage: ChatMessage = { role: 'user', parts: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
        const result = await chatRef.current.sendMessageStream({ message: input });

        let modelResponse = '';
        setMessages((prev) => [...prev, { role: 'model', parts: '' }]);

        for await (const chunk of result) {
            modelResponse += chunk.text;
            setMessages((prev) => {
                const newMessages = [...prev];
                newMessages[newMessages.length - 1].parts = modelResponse;
                return newMessages;
            });
        }
    } catch (error) {
        console.error('Gemini API error:', error);
        const errorMessage: ChatMessage = {
            role: 'model',
            parts: "Sorry, I'm having trouble connecting right now. Please try again later.",
        };
        setMessages((prev) => [...prev, errorMessage]);
    } finally {
        setIsLoading(false);
    }
  };
  
  if (!API_KEY) return null;

  return (
    <>
      {/* FAB */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-teal-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-teal-700 dark:hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900 transition-transform duration-200 transform hover:scale-110 z-50"
        aria-label="Toggle chatbot"
      >
        {isOpen ? <CloseIcon className="w-8 h-8"/> : <ChatBubbleIcon className="w-8 h-8" />}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 w-full max-w-sm h-[60vh] bg-white dark:bg-zinc-800 rounded-lg shadow-2xl flex flex-col transition-all duration-300 ease-in-out origin-bottom-right z-50 ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="p-4 bg-zinc-100 dark:bg-zinc-900/50 border-b border-zinc-200 dark:border-zinc-700 rounded-t-lg">
          <h3 className="font-bold text-lg text-zinc-900 dark:text-white">Muktar's AI Assistant</h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Powered by Gemini</p>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  msg.role === 'user'
                    ? 'bg-teal-600 text-white'
                    : 'bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200'
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{msg.parts}</p>
              </div>
            </div>
          ))}
           {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-[80%] p-3 rounded-lg bg-zinc-200 dark:bg-zinc-700">
                <div className="flex items-center space-x-1">
                    <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse [animation-delay:-0.3s]"></span>
                    <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse [animation-delay:-0.15s]"></span>
                    <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-zinc-200 dark:border-zinc-700">
          <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              className="w-full px-4 py-2 bg-zinc-100 dark:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 rounded-full focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition text-zinc-900 dark:text-white"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="p-3 bg-teal-600 text-white rounded-full hover:bg-teal-700 disabled:bg-zinc-400 dark:disabled:bg-zinc-600 disabled:cursor-not-allowed transition-colors"
              aria-label="Send message"
            >
              <SendIcon className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Chatbot;