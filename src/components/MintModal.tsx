import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useReadContract, useWriteContract, useWatchContractEvent, useChainId, useAccount } from 'wagmi';
import { parseEther } from 'viem';
import { apechain } from '@/config/chains';

export function MintModal() {
  const [quantity, setQuantity] = useState(1);
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const chainId = useChainId();
  const { address } = useAccount();

  const { data: totalSupply } = useReadContract({
    address: apechain.contracts.gizmoCat.address,
    abi: apechain.contracts.gizmoCat.abi,
    functionName: 'totalSupply',
  });

  const { writeContractAsync, isPending } = useWriteContract();

  useWatchContractEvent({
    address: apechain.contracts.gizmoCat.address,
    abi: apechain.contracts.gizmoCat.abi,
    eventName: 'Transfer',
    onLogs() {
      toast({
        title: "Success!",
        description: `Successfully minted ${quantity} Gizmo Cat${quantity > 1 ? 's' : ''}!`,
      });
      setIsOpen(false);
    },
  });

  const handleMint = async () => {
    if (!address) {
      toast({
        title: "Error",
        description: "Please connect your wallet first",
        variant: "destructive",
      });
      return;
    }

    if (quantity < 1 || quantity > 10) {
      toast({
        title: "Error",
        description: "You can only mint between 1 and 10 Gizmo Cats at a time",
        variant: "destructive",
      });
      return;
    }

    try {
      await writeContractAsync({
        address: apechain.contracts.gizmoCat.address,
        abi: apechain.contracts.gizmoCat.abi,
        functionName: 'mint',
        args: [BigInt(quantity)],
        value: parseEther(String(quantity)),
        chain: apechain,
        account: address
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to mint. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-bold px-8 py-4 rounded-full">
          Mint Gizmo Cat
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Mint Gizmo Cat</DialogTitle>
          <DialogDescription>
            {totalSupply ? `${totalSupply.toString()}/10000 minted` : 'Loading...'}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Quantity (max 10)</label>
            <Input
              type="number"
              min="1"
              max="10"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">
              Total cost: {quantity} APE
            </p>
          </div>
          <Button 
            onClick={handleMint} 
            disabled={isPending || !address}
            className="w-full"
          >
            {isPending ? 'Minting...' : 'Mint'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}