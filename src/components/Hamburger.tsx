import { Button } from '@/components/ui/button';
import { isHeaderNavigationOpen, toggleHeaderNavigation } from '@/stores';

export default function Hamburger() {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleHeaderNavigation}
      aria-expanded={isHeaderNavigationOpen.get()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        {isHeaderNavigationOpen.get() ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        )}
      </svg>
      <span className="sr-only">選單</span>
    </Button>
  );
}

