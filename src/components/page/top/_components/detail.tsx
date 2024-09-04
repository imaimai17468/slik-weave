import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { searchParamsCache } from "@/utils/searchParams";
import { EyeOff } from "lucide-react";
import { DetailContent } from "./detail-content";

export const Detail = () => {
  const { threadId } = searchParamsCache.all();

  return (
    <div className="p-4">
      <div className="border-b-2 border-dashed">
        <p className="text-2xl font-bold">Detail</p>
      </div>
      {threadId ? (
        <DetailContent />
      ) : (
        <div className="py-4">
          <Alert>
            <EyeOff className="w-4 h-4" />
            <AlertTitle>No Detail</AlertTitle>
            <AlertDescription>Please select a channel</AlertDescription>
          </Alert>
        </div>
      )}
    </div>
  );
};
