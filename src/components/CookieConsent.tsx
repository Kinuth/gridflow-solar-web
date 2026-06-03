import { useEffect, useState } from "react";

const STORAGE_KEY = "gf_cookie_consent";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const val = localStorage.getItem(STORAGE_KEY);
      if (!val) setVisible(true);
    } catch (e) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try { localStorage.setItem(STORAGE_KEY, "accepted"); } catch (e) {}
    setVisible(false);
    // Place to initialize analytics scripts if needed
  };

  const decline = () => {
    try { localStorage.setItem(STORAGE_KEY, "rejected"); } catch (e) {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed left-4 right-4 bottom-6 z-50 flex flex-col md:flex-row items-center justify-between gap-4 bg-white border border-gray-200 rounded-lg p-4 shadow-lg">
      <div className="text-sm text-gray-800">
        We use cookies to improve your experience and to show personalized ads. By accepting, you agree to our use of cookies. <a href="/privacy-policy.html" className="underline text-green-600">Privacy Policy</a>
      </div>
      <div className="flex gap-2">
        <button onClick={decline} className="px-3 py-1.5 text-sm bg-gray-100 text-gray-800 rounded-md border">Decline</button>
        <button onClick={accept} className="px-3 py-1.5 text-sm bg-green-600 text-white rounded-md">Accept</button>
      </div>
    </div>
  );
};

export default CookieConsent;
