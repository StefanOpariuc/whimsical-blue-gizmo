import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();

  const gizmoCats = [
    "https://ordinals.com/content/95593000b8c263e9dfdebef1827ede2cb3bc161f85e3e9808aa49cb1c0061afbi0",
    "https://ordinals.com/content/4a60f9293770ef0a35129f8ed74693610d268f3a151f48663d5fc45c8b972298i0",
    "https://ordinals.com/content/62b6c7af49fedfb2aad960c8ae45e1357b0a8990899ed4ddc12efd2b9ecbd0ffi0",
    "https://ordinals.com/content/5d4a71a950fb1c6758a4d8aea7606b35330aeee6e14ba17b524f0f7c484edd76i0",
    "https://ordinals.com/content/49be1e898c0975efae8a7de4305768fd26ecb07059f6d3d3169ae7d602702942i0"
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
              <img
                src={cat}
                alt={`Gizmo Cat ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center my-12">
          <iframe
            src="https://embed.ipfscdn.io/ipfs/bafybeicd3qfzelz4su7ng6n523virdsgobrc5pcbarhwqv3dj3drh645pi/?contract=0x752506b34b72DC196d804Ddc933F7A0D3cd257a4&chain=%7B%22name%22%3A%22ApeChain%22%2C%22chain%22%3A%22%22%2C%22rpc%22%3A%5B%22https%3A%2F%2F33139.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22ApeCoin%22%2C%22symbol%22%3A%22APE%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22APE%22%2C%22chainId%22%3A33139%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22apechain%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmcyHSQnd747pd7EmtobQd12vh4vvyYYvnNNQqKrG12ky1%22%2C%22width%22%3A512%2C%22height%22%3A512%2C%22format%22%3A%22svg%22%7D%7D&clientId=5a517335085f93ec6956718787637fdb&theme=dark&primaryColor=blue"
            width="100%"
            height="750px"
            style={{ maxWidth: '100%' }}
          />
        </div>

        <div className="text-center mb-12">
          <p className="text-6xl font-bold text-yellow-400 mb-4 animate-pulse">
            Just 4.20 APE each
          </p>
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
