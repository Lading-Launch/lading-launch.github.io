import { Store } from "lucide-react";

interface AddToShopifyButtonProps {
  appSlug?: string;
  className?: string;
  variant?: "default" | "light";
}

const AddToShopifyButton = ({ appSlug = "", className = "", variant = "default" }: AddToShopifyButtonProps) => {
  const storeUrl = appSlug
    ? `https://apps.shopify.com/${appSlug}?ref=lading-launch`
    : "#";

  const variantClasses =
    variant === "light"
      ? "bg-primary-foreground text-primary border-2 border-brass hover:bg-brass/20 hover:border-brass"
      : "bg-brass text-anchor-dark border-2 border-brass hover:bg-brass/90 shadow-[var(--shadow-maritime)]";

  return (
    <a
      href={storeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold transition border-2 ${variantClasses} ${className}`}
    >
      <Store className="h-6 w-6 mr-3 shrink-0" aria-hidden />
      Add to Shopify
    </a>
  );
};

export default AddToShopifyButton;
