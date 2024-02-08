import { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

export default function UserDashboardQrCodeScanner() {
  const [scannerResult, setScannerResult] = useState();

  useEffect(() => {
    let scanner;
    try {
      scanner = new Html5QrcodeScanner(
        "reader",
        {
          qrbox: { width: 250, height: 250 }, // Adjusted for practicality
          fps: 5,
        },
        false
      );

      const success = (result) => {
        setScannerResult(result);
        console.log(result);
        // Consider delaying cleanup to ensure it doesn't interfere with state updates
      };

      const error = (err) => {
        console.log(err);
      };

      scanner.render(success, error);
    } catch (error) {
      console.error("Error initializing QR scanner: ", error);
    }
    // Cleanup function
    return () => {
      if (scanner) {
        scanner.clear().catch((err) => {
          console.error("Error clearing QR scanner: ", err);
        });
      }
    };
  }, []);

  return (
    <div>
      <div>
        <div id="reader"></div>
        {scannerResult && <p>Scan Result: {scannerResult}</p>}
      </div>
    </div>
  );
}
