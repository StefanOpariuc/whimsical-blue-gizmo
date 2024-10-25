import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();

  return (
    <div className="min-h-screen bg-blue-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-800 via-blue-900 to-black">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-yellow-400 mb-4 animate-bounce">
            Gizmo The Cat BTC
          </h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto">
            The most retarded collection of cat NFTs you&apos;ll ever find on the blockchain! 
            🐱 Much wow, very crypto! 🚀
          </p>
        </div>

        <div className="flex justify-center items-center my-12">
          <iframe 
            src="https://www.google.com" 
            className="w-full max-w-4xl h-[600px] rounded-lg shadow-2xl border-4 border-yellow-400"
            title="Google"
          />
        </div>

        <div className="fixed bottom-4 right-4">
          <Button 
            onClick={() => toast({
              title: "Much WOW!",
              description: "You found the secret button! 🎉",
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