
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gift, Users, DollarSign, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const ReferralProgramInfoPage = () => {
  return (
    <>
      <Helmet>
        <title>Referral Program - CodersZonee</title>
        <meta name="description" content="Join the CodersZonee referral program. Share with friends and earn rewards!" />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-12 px-4"
      >
        <header className="text-center mb-16">
          <motion.div 
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
            className="mx-auto mb-6 p-4 bg-[#FF6B35] rounded-full w-fit inline-block"
          >
            <Gift size={48} className="text-black" />
          </motion.div>
          <h1 className="text-5xl font-bold text-[#FF6B35] mb-4">Share CodersZonee, Earn Rewards!</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Love learning with us? Invite your friends to join CodersZonee and get rewarded for every successful referral. It's a win-win!
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-white mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: <Share2 size={40} className="text-[#FF6B35]" />, title: "Share Your Link", description: "Get your unique referral link from your student dashboard." },
              { icon: <Users size={40} className="text-[#FF6B35]" />, title: "Friends Sign Up", description: "Your friends sign up for CodersZonee using your link." },
              { icon: <DollarSign size={40} className="text-[#FF6B35]" />, title: "Earn Rewards", description: "Receive credits or cash for every friend who becomes a paid member." },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                className="bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-orange-500/20 transition-shadow"
              >
                <div className="flex justify-center mb-6">{step.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16 bg-slate-800 p-10 rounded-xl shadow-xl">
          <h2 className="text-4xl font-bold text-center text-[#FF6B35] mb-8">Program Benefits</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-700 border-slate-600 text-white">
              <CardHeader>
                <CardTitle className="text-2xl text-[#FF6B35]">For You (The Referrer)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="flex items-center"><Gift className="mr-2 h-5 w-5 text-green-400" /> Earn $10 credit for each referred friend who signs up for a paid plan.</p>
                <p className="flex items-center"><Gift className="mr-2 h-5 w-5 text-green-400" /> Unlock exclusive badges and recognition.</p>
                <p className="flex items-center"><Gift className="mr-2 h-5 w-5 text-green-400" /> Track your referrals and earnings easily in your dashboard.</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-700 border-slate-600 text-white">
              <CardHeader>
                <CardTitle className="text-2xl text-[#FF6B35]">For Your Friends (The Referred)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="flex items-center"><Gift className="mr-2 h-5 w-5 text-green-400" /> Get a 10% discount on their first paid plan subscription.</p>
                <p className="flex items-center"><Gift className="mr-2 h-5 w-5 text-green-400" /> Join a vibrant community of learners.</p>
                <p className="flex items-center"><Gift className="mr-2 h-5 w-5 text-green-400" /> Access high-quality courses from expert instructors.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Sharing?</h2>
          <p className="text-lg text-slate-300 max-w-xl mx-auto mb-8">
            Log in to your account to find your unique referral link and start earning rewards today!
          </p>
          <Button asChild size="lg" className="bg-[#FF6B35] text-black hover:bg-orange-400 transition-colors text-lg px-10 py-3">
            <Link to="/student/dashboard">Go to My Dashboard</Link>
          </Button>
        </section>
      </motion.div>
    </>
  );
};

export default ReferralProgramInfoPage;
