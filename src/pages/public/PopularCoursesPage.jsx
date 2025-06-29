
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const mockPopularCourses = [
  { id: 1, title: "React for Beginners", category: "Web Development", rating: 4.8, reviews: 1250, imageKey: "react-popular", description: "Get started with React and build your first interactive web apps." },
  { id: 2, title: "Python Data Structures", category: "Programming", rating: 4.9, reviews: 980, imageKey: "python-popular", description: "Master essential Python data structures for efficient coding." },
  { id: 3, title: "Advanced CSS and Sass", category: "Web Design", rating: 4.7, reviews: 750, imageKey: "css-popular", description: "Elevate your web designs with advanced CSS techniques and Sass." },
];

const PopularCoursesPage = () => {
  const { toast } = useToast();

  const handleFeatureNotImplemented = () => {
    toast({
      title: "🚧 Feature Not Implemented",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      variant: "destructive",
    });
  };

  return (
    <>
      <Helmet>
        <title>Popular Courses - EduPlatform</title>
        <meta name="description" content="Discover trending and highest-rated courses on EduPlatform." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-12 px-4"
      >
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#FF6B35] mb-4">Popular Courses</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Join thousands of learners in these top-rated courses.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockPopularCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="bg-slate-800 border-slate-700 text-white h-full flex flex-col overflow-hidden hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300 transform hover:-translate-y-1">
                <img  alt={`${course.title} thumbnail`} className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1677696795233-5ef097695f12" />
                <CardHeader>
                  <CardTitle className="text-[#FF6B35] text-2xl">{course.title}</CardTitle>
                  <CardDescription className="text-slate-400">{course.category}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-slate-300 mb-4 text-sm">{course.description}</p>
                  <div className="flex items-center mb-4">
                    {[...Array(Math.floor(course.rating))].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                    {course.rating % 1 !== 0 && <Star className="h-5 w-5 text-yellow-400 fill-yellow-400 opacity-50" />} 
                    {[...Array(5 - Math.ceil(course.rating))].map((_, i) => (
                      <Star key={`empty-${i}`} className="h-5 w-5 text-gray-500" />
                    ))}
                    <span className="ml-2 text-sm text-slate-400">({course.reviews} reviews)</span>
                  </div>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button className="w-full bg-[#FF6B35] text-black hover:bg-orange-400" onClick={handleFeatureNotImplemented}>
                    Enroll Now
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default PopularCoursesPage;
  