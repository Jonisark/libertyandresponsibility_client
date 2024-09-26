import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import PageHeader from "../components/PageHeader";

export default function Contact() {
    const upiId = "9609094938@ybl"; // Replace with your actual UPI ID

    return (
        <>
            <Navbar />
            <PageHeader title="Donate a smile" path="donate" name="Donate" />
            <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
                <h1 className="text-3xl font-bold mb-6">Make a Donation</h1>
                <p className="mb-4 text-center">
                    Thank you for considering a donation! Your contribution helps us make a difference.
                </p>

                <div className="mb-6 w-full max-w-xs"> {/* Set a max width for the image container */}
                    <img
                        src="/img/IMG_20240926_102951.jpg" // Make sure the path is correct
                        alt="QR Code for Donation"
                        className="w-full h-auto" // Use w-full to fill the container width
                    />
                </div>

                <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
                    <h2 className="text-xl font-semibold mb-4">UPI ID</h2>
                    <p className="mb-2">{upiId}</p>
                    <p className="mb-4">Scan the QR code or send money directly using this UPI ID.</p>
                </div>
            </div>
            
            <Footer />
            <BackToTop />
        </>
    );
}
