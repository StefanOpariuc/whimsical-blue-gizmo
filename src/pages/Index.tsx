import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { MintModal } from "@/components/MintModal";

const Index = () => {
    const {toast} = useToast();

    const gizmoCats = [
        "461.png",
        "113.png",
        "bike.gif",
        "537.png",
        "761.png"
    ];

    const rotationClasses = [
        'rotate-3',
        '-rotate-3',
        'rotate-6',
        '-rotate-6',
        'rotate-12',
        '-rotate-12'
    ];

    const getRandomRotation = () => {
        return rotationClasses[Math.floor(Math.random() * rotationClasses.length)];
    };

    return (
        <div className="min-h-screen bg-blue-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-800 via-blue-900 to-black">
            <div className="container mx-auto px-4 py-8">
                <div className="flex justify-end mb-4">
                    <ConnectButton />
                </div>
                
                <div className="text-center mb-12">
                    <h1 className="text-6xl font-bold text-yellow-400 mb-4 animate-pulse">
                        Gizmo Cat coming to ApeChain
                    </h1>
                    <p className="text-white/80 text-xl max-w-2xl mx-auto">
                        The most retarded collection of cat NFTs you&apos;ll ever find now on many chains!
                        🐱 Much wow!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
                    {gizmoCats.map((cat, index) => (
                        <div
                            key={index}
                            className={`rounded-lg overflow-hidden hover:scale-105 transition-transform duration-200 ${getRandomRotation()}`}
                        >
                            <a href="https://x.com/ApechainGizmo">
                                <img
                                    src={cat}
                                    alt={`Gizmo Cat ${index + 1}`}
                                    className="w-full h-auto object-cover"
                                />
                            </a>
                        </div>
                    ))}
                </div>

                <div className="text-center mb-12">
                    <p className="text-6xl font-bold text-yellow-400 mb-4 animate-pulse">
                        Just 1 APE each
                    </p>
                    <MintModal />
                </div>

                <div className="fixed bottom-4 right-4">
                    <Button
                        onClick={() => toast({
                            title: "You bugger!",
                            description: "Told you not to press it",
                        })}
                        className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-bold px-8 py-4 rounded-full animate-spin hover:animate-none"
                    >
                        DO NOT PRESS
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Index;