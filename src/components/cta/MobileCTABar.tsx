"use client";
import { Phone, MessageCircle } from "lucide-react";

export default function MobileCTABar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 block md:hidden">
      <div className="mx-auto max-w-screen-sm w-full pb-[calc(env(safe-area-inset-bottom)+12px)]">
        <div className="flex w-full rounded-none overflow-hidden border-t border-white/20 dark:border-gray-800/30 bg-white/90 dark:bg-gray-900/90 backdrop-blur shadow-xl">
          <a
            href="tel:+34957468222"
            aria-label="Llamar"
            className="flex-1 inline-flex items-center justify-center gap-2 py-4 text-sm font-semibold bg-primary text-primary-foreground transition-transform active:scale-95 border-r border-white/20 dark:border-gray-800/30"
          >
            <Phone className="size-5" />
            <span>Llamar</span>
          </a>

          <a
            href="https://wa.me/34644032823"
            aria-label="WhatsApp"
            className="flex-1 inline-flex items-center justify-center gap-2 py-4 text-sm font-semibold bg-green-600 text-white transition-transform active:scale-95"
          >
            <MessageCircle className="size-5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
