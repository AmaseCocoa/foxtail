function getCookie(name: string) {
    if (typeof document === 'undefined') return undefined;
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        return parts.pop()?.split(';').shift();
    }
    return undefined;
}

function setCookie(name: string, value: string, days: number) {
    if (typeof document === 'undefined') return;
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    const secure = window.location.protocol === 'https:' ? 'Secure;' : '';
    const sameSite = 'SameSite=Strict';
    
    document.cookie = `${name}=${value}; ${expires}; path=/; ${secure} ${sameSite}`;
}

document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('cookie-consent-popup');
    if (!popup) return;

    const consent = getCookie('allow_analytics');
    const hasConsent = consent === 'true' || consent === 'false';

    if (hasConsent) {
        popup.style.display = 'none';
        return;
    }

    popup.style.display = 'block';

    const dismissPopup = () => {
        popup.style.display = 'none';
    };

    const setConsentAndDismiss = (value: string) => {
        setCookie('allow_analytics', value, 365); 
        dismissPopup();
    };

    document.getElementById('consent-accept')?.addEventListener('click', () => {
        setConsentAndDismiss('true');
    });

    document.getElementById('consent-reject')?.addEventListener('click', () => {
        setConsentAndDismiss('false');
    });

    document.getElementById('consent-close')?.addEventListener('click', dismissPopup);
});