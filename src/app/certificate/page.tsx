"use client";
import React, { useState } from "react";
import { Calendar, Download } from "lucide-react";
import { Button } from "../../components/ui/organisms/button";
import { Card, CardContent } from "../../components/ui/organisms/card";

const Certificates = () => {
  const [hasCertificate, setHasCertificate] = useState(false);

  return (
    <div>
      <div className="mb-8 animate-fade-in">
        <h1 className="text-3xl font-bold text-gray-800"> Certificates</h1>
        <span className="text-gray-500 mt-2 text-lg w-5/12 block">
          Here you can see your awarded certificate. You can view or download
          it.
        </span>
      </div>

      <div
        className="bg-white rounded-lg shadow-sm p-8 animate-fade-in"
        style={{ animationDelay: "150ms" }}
      >
        {!hasCertificate ? (
          <div className="flex flex-col items-center justify-center py-16 space-y-4 animate-fade-in">
            <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center">
              <Calendar className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              No certificates yet
            </h3>
            <p className="text-gray-500 text-center">
              You haven&lsquo;t been awarded any certificates.
            </p>

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
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Product Design Certification
              </h3>
              <p className="text-gray-500">
                The bearer of this certificate has completed the 6 months
                intensive program and has been awarded a certificate
              </p>
              <div className="flex items-center gap-2 text-gray-500 mt-4">
                <Calendar className="h-5 w-5" />
                <span>Completed on Jan 31, 2025</span>
              </div>
            </div>

            <Card className="border border-gray-200 animate-scale-in">
              <CardContent className="p-0">
                <div className="aspect-[16/9] bg-gray-100 w-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <h4 className="font-bold text-xl mb-4">
                      Product Design Certificate
                    </h4>
                    <p className="text-gray-600 mb-2">This certifies that</p>
                    <p className="font-semibold text-lg mb-2">Benson Ade</p>
                    <p className="text-gray-600 mb-4">
                      has successfully completed the
                    </p>
                    <p className="font-semibold">
                      Product Design Intensive Program
                    </p>
                    <div className="mt-8 border-t pt-4">
                      <p className="text-sm text-gray-500">
                        Certificate ID: PDC-2025-BA-001
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-6">
              <Button className="w-full sm:w-auto flex items-center justify-center gap-2">
                <Download className="h-4 w-4" />
                Download
              </Button>
            </div>

            <Button
              variant="outline"
              onClick={() => setHasCertificate(false)}
              className="w-full mt-2"
              size="sm"
            >
              Demo: Hide Certificate
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Certificates;
