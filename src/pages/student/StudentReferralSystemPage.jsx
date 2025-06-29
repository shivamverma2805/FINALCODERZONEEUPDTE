
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gift, Copy, Share2, BarChart3, DollarSign, Users } from 'lucide-react'; // Added Users
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/use-toast';

const StudentReferralSystemPage = () => {
  const { user } = useAuth();
  const { toast } = useToast();

  const referralCode = `CZ-${user?.email?.substring(0,3).toUpperCase() || 'REF'}${new Date().getFullYear().toString().slice(-2)}`;
  const referralLink = `https://coderszonee.com/signup?ref=${referralCode}`;

  const copyReferralLink = () => {
    navigator.clipboard.writeText(referralLink);
    toast({ title: "🔗 Link Copied!", description: "Referral link copied to clipboard." });
  };

  const shareViaWhatsApp = () => {
    window.open(`https://wa.me/?text=Join%20CodersZonee%20with%20my%20referral%20code:%20${referralCode}%20Link:%20${referralLink}`, '_blank');
  };

  const shareViaEmail = () => {
    window.location.href = `mailto:?subject=Join%20CodersZonee&body=Hey!%20I'm%20inviting%20you%20to%20join%20CodersZonee.%20Use%20my%20referral%20code%20${referralCode}%20or%20click%20this%20link:%20${referralLink}`;
  };
  
  const handleFeatureNotImplemented = (featureName = "This feature") => {
    toast({
      title: `🚧 ${featureName} Not Implemented`,
      description: "This functionality isn't built yet—but you can request it! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>Referral System - CodersZonee</title>
        <meta name="description" content="Refer friends to CodersZonee and earn rewards. Track your referrals and earnings." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-8 px-4"
      >
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-[#FF6B35] flex items-center">
            <Gift className="mr-3 h-10 w-10" /> Referral Affiliate Dashboard
          </h1>
          <p className="text-lg text-slate-300">Share your link, track sales, and withdraw earnings!</p>
        </header>

        <Card className="bg-slate-800 border-slate-700 text-white">
          <CardHeader>
            <CardTitle className="text-2xl text-[#FF6B35]">Your Referral Tools</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-slate-700 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">Your Unique Referral Link</h3>
              <div className="flex items-center justify-between p-3 bg-slate-600 rounded-md">
                <span className="text-slate-300 truncate">Link: <a href={referralLink} target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-orange-400">{referralLink}</a></span>
                <Button variant="ghost" size="sm" onClick={copyReferralLink} className="text-[#FF6B35] hover:text-orange-400">
                  <Copy className="mr-2 h-4 w-4" /> Copy Link
                </Button>
              </div>
              <div className="mt-3 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <Button onClick={shareViaWhatsApp} className="flex-1 bg-green-500 hover:bg-green-600 text-white">
                  <Share2 className="mr-2 h-4 w-4" /> Share on WhatsApp
                </Button>
                <Button onClick={shareViaEmail} className="flex-1 bg-blue-500 hover:bg-blue-600 text-white">
                  <Share2 className="mr-2 h-4 w-4" /> Share via Email
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-slate-700 border-slate-600">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-[#FF6B35] flex items-center"><Users className="mr-2 h-5 w-5"/>Total Referrals</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-white">12</p>
                  <p className="text-xs text-slate-400">Friends joined via your link</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-700 border-slate-600">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-[#FF6B35] flex items-center"><BarChart3 className="mr-2 h-5 w-5"/>Sales Tracked</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-white">5</p>
                  <p className="text-xs text-slate-400">Successful paid sign-ups</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-700 border-slate-600">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-[#FF6B35] flex items-center"><DollarSign className="mr-2 h-5 w-5"/>Earnings</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-white">$50.00</p>
                  <p className="text-xs text-slate-400">Available for withdrawal</p>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Payment Withdrawals</h3>
              <Button onClick={() => handleFeatureNotImplemented("Payment Withdrawal")} className="bg-[#FF6B35] text-black hover:bg-orange-400">
                Withdraw Earnings
              </Button>
              <p className="text-xs text-slate-400 mt-2">Minimum withdrawal: $20.00. Payments processed via PayPal (mock).</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
};

export default StudentReferralSystemPage;
