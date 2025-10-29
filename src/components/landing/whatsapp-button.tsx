'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button if scrolled down more than 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    // Add safe area to footer on mobile
    const footer = document.getElementById('contacto');
    if (footer && window.innerWidth < 768) {
        footer.classList.add('whatsapp-button-safe-area');
    }

    return () => {
        window.removeEventListener('scroll', toggleVisibility);
        if (footer && window.innerWidth < 768) {
            footer.classList.remove('whatsapp-button-safe-area');
        }
    }
  }, [pathname]);

  return (
    <div className={`fixed bottom-5 right-5 z-50 transition-opacity duration-300 hidden md:block ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <Link href="https://wa.me/34644032823" target="_blank" rel="noopener noreferrer" className="block transform transition-transform hover:scale-110">
            <div className="bg-green-500 rounded-full p-3 shadow-lg">
                 <Image src="/icono_Whatsapp.png" alt="WhatsApp" width={40} height={40} />
            </div>
        </Link>
    </div>
  );
};

export default WhatsAppButton;
