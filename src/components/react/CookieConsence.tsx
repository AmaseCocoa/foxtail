import React, { useState, useEffect } from 'react';
import { X } from "lucide-react";
import Cookies from 'js-cookie';

const hasConsentCookie = () => {
    const consent = Cookies.get('allow_analytics');
    return consent === 'true' || consent === 'false';
};

const CookieConsentPopup: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!hasConsentCookie()) {
            setIsVisible(true);
        }
    }, []);

    if (!isVisible) {
        return null;
    }

    const dismissPopup = () => {
        setIsVisible(false);
    };

    const setConsentAndDismiss = (value: 'true' | 'false') => {
        Cookies.set('allow_analytics', value, { expires: 365, secure: window.location.protocol === 'https:', sameSite: 'Strict' }); // true
        dismissPopup();
    };

    const handleAcceptAll = () => {
        setConsentAndDismiss('true');
    };

    const handleRejectAll = () => {
        setConsentAndDismiss('false');
    };

    return (
        <div id="cookie-consent-popup" className="fixed bottom-4 left-4 z-50 max-w-sm">
            <div className="transition duration-100 bg-white p-4 rounded-lg shadow-2xl border border-gray-200 relative">
                
                <button 
                    onClick={dismissPopup} 
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition"
                >
                    <X className="w-5 h-5" />
                </button>
                
                <p className="text-sm text-gray-700 pr-6">
                    当サイトでは、トラフィック分析のためにクッキーを使用しています。
                    <a href="/privacy-policy" 
                       className="text-blue-600 hover:text-blue-800 font-medium underline" 
                       target="_blank" 
                       rel="noopener noreferrer"
                    >
                        クッキーポリシー
                    </a>
                    をご確認ください。
                </p>
            
                <div className="mt-4 flex space-x-3">
                    <button 
                        onClick={handleAcceptAll} 
                        className="flex-1 border border-[#E78B30] text-[#E78B30] hover:bg-[#E78B30] hover:text-white text-sm font-medium py-2 px-4 rounded-md transition duration-150 ease-in-out"
                    >
                        同意する
                    </button>
                
                    <button 
                        onClick={handleRejectAll} 
                        className="flex-1 border border-gray-600 text-gray-600 hover:bg-gray-100 text-sm font-medium py-2 px-4 rounded-md transition duration-150 ease-in-out"
                    >
                        拒否
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieConsentPopup;