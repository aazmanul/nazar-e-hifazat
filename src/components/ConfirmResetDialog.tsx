import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface ConfirmResetDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
}

const ConfirmResetDialog = ({ open, onOpenChange, onConfirm }: ConfirmResetDialogProps) => {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="card-ceramic border-border/50">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-xl font-bold text-foreground">
            পুনরায় শুরু করবেন?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-muted-foreground text-base">
            আপনার সমস্ত অগ্রগতি মুছে যাবে এবং আবার শূন্য থেকে শুরু হবে।
            আপনি কি নিশ্চিত?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="gap-3">
          <AlertDialogCancel className="font-medium">
            না, থাকুক
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={onConfirm}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90 font-medium"
          >
            হ্যাঁ, রিসেট করুন
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmResetDialog;
