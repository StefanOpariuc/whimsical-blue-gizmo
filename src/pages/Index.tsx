import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const NFTCard = ({ id, price }: { id: number; price: number }) => (
  <Card className="bg-white/10 p-4 hover:bg-white/20 transition-all cursor-pointer">
    <img
      src={`https://placehold.co/400x400/blue/white?text=Gizmo%20${id}`}
      alt={`Gizmo ${id}`}
      className="w-full h-auto rounded-lg mb-4 hover:scale-105 transition-transform"
    />
    <div className="flex justify-between items-center">
      <div>
        <h3 className="text-white font-bold text-xl mb-1">Gizmo #{id}</h3>
        <p className="text-white/70">Floor: {price} BTC</p>
      </div>
      <Button 
        variant="secondary"
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold animate-pulse"
      >
        Buy Now
      </Button>
    </div>
  </Card>
);

const Index = () => {
  const { toast } = useToast();
  
  const gizmos = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    price: Number((Math.random() * 0.1).toFixed(4))
  }));

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

        <div className="stats flex justify-center gap-8 mb-12">
          {[
            { label: "Floor Price", value: "0.069 BTC" },
            { label: "Volume", value: "4.20 BTC" },
            { label: "Items", value: "1,337" }
          ].map((stat, i) => (
            <div key={i} className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
              <p className="text-white/60 text-sm">{stat.label}</p>
              <p className="text-white text-2xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gizmos.map((gizmo) => (
            <NFTCard key={gizmo.id} {...gizmo} />
          ))}
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