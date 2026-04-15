import { toast } from "sonner";

// Show success message
export function showSuccess(message) {
  toast.success(message, {
    duration: 5000,
    position: "bottom-right",
    closeButton: true,
    style: {
      backgroundColor: "#ECFDF5",
      color: "#065F46",
      border: "1px solid #34D399",
    },
  });
}