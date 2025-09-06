import { Calendar, Download,  } from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "../card";
import Modal from "../modal";
import { Button } from "../button";

interface CertificateProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Certificate({ isOpen, onClose }: CertificateProps) {
  const [hasCertificate, setHasCertificate] = useState(false);
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <div className="border-b-1 border-gray-300 space-y-4 pb-3 flex justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 text-left">
            Certificate
          </h3>

          <p className="text-gray-500 text-left">
            Here you can see your awarded certificate. You can view or download
            it.
          </p>
        </div>
      </div>
      {!hasCertificate ? (
        <div className="flex flex-col space-y-4 animate-fade-in">
          <div className="w-full h-[16rem] bg-gray-100 rounded-md flex flex-col gap-2 items-center justify-center">
            <Calendar className="w-14 h-14 text-gray-400" />
            <h3 className="text-xl font-semibold text-gray-800 text-left">
              No certificate yet
            </h3>
            <span>You haven’t been award a certificate.</span>
          </div>
          {/* Demo button */}
          <Button
            variant="outline"
            onClick={() => setHasCertificate(true)}
            className="mt-4"
          >
            Demo: Show Certificate
          </Button>
        </div>
      ) : (
        <div className="space-y-6 animate-fade-in">
          <div>
            <h3 className="text-xl text-left py-4 font-semibold text-gray-800 mb-2">
              Product Design Certification
            </h3>
            <p className="text-gray-500 text-left">
              The bearer of this certificate has completed the 6 months
              intensive program and is been awarded a certificate
            </p>
            <div className="flex text-xs items-center gap-2 text-gray-500 mt-4">
              <Calendar className="h-5 w-5" />
              <span>Completed on Jan 31, 2025</span>
            </div>
          </div>

          <Card className="border border-gray-200 animate-scale-in">
            <CardContent className="p-0">
              <div className="aspect-[16/9] bg-[#F9F9F9] w-full flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="mb-4"></div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center gap-4 mt-6">
            <span className="flex items-center justify-center gap-2">
              <Download className="h-4 w-4" />
              Download
            </span>
            <Button variant="outline" onClick={() => setHasCertificate(false)}>
              Demo: Hide Certificate
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
}
