import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function WhatsAppButton({ 
  phoneNumber = "919388051003", 
  message = "Hello! I'm interested in ordering Kerala food products from Royal Taste Food Products. Can you help me with the order process and pricing?", 
  className = "",
  children
}: WhatsAppButtonProps) {
  // Function to detect if user is on mobile
  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };
  const handleWhatsAppClick = () => {
    // Remove any spaces, dashes, or special characters from phone number
    const cleanPhoneNumber = phoneNumber.replace(/[\s\-\(\)]/g, '');
    
    // Ensure the phone number has country code (add +91 if not present)
    const formattedPhoneNumber = cleanPhoneNumber.startsWith('91') ? cleanPhoneNumber : 
                                 cleanPhoneNumber.startsWith('+91') ? cleanPhoneNumber.substring(1) : 
                                 `91${cleanPhoneNumber}`;
    
    // Encode the message properly
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL with proper formatting
    const whatsappUrl = `https://wa.me/${formattedPhoneNumber}?text=${encodedMessage}`;
    
    // Use different URLs based on device type
    if (isMobile()) {
      // For mobile devices, try to open WhatsApp app
      try {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      } catch (error) {
        // Fallback to WhatsApp web for mobile
        const webWhatsappUrl = `https://web.whatsapp.com/send?phone=${formattedPhoneNumber}&text=${encodedMessage}`;
        window.open(webWhatsappUrl, '_blank', 'noopener,noreferrer');
      }
    } else {
      // For desktop, always use WhatsApp web
      const webWhatsappUrl = `https://web.whatsapp.com/send?phone=${formattedPhoneNumber}&text=${encodedMessage}`;
      window.open(webWhatsappUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className={`inline-flex items-center gap-2 transition-all duration-300 ${className}`}
    >
      {children || (
        <>
          <MessageCircle className="w-5 h-5" />
          Chat on WhatsApp
        </>
      )}
    </button>
  );
}
