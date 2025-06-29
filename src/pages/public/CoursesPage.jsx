
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter as FilterIcon } from 'lucide-react'; // Renamed to avoid conflict
import { useToast } from '@/components/ui/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';


const mockCourses = [
  { id: 1, title: "Introduction to React", category: "Web Development", duration: "4 Weeks", price: "$49", imageKey: "react-course", description: "Learn the fundamentals of React and build dynamic web applications.", pathType: "Skill Path" },
  { id: 2, title: "Advanced Python Programming", category: "Programming", duration: "6 Weeks", price: "$99", imageKey: "python-course", description: "Deep dive into advanced Python concepts and libraries.", pathType: "Skill Path" },
  { id: 3, title: "Data Visualization with D3.js", category: "Data Science", duration: "5 Weeks", price: "$79", imageKey: "d3-course", description: "Create stunning and interactive data visualizations using D3.js.", pathType: "Skill Path" },
  { id: 4, title: "UI/UX Design Fundamentals", category: "Design", duration: "4 Weeks", price: "$69", imageKey: "uiux-course", description: "Master the principles of user interface and user experience design.", pathType: "Career Path" },
  { id: 5, title: "Machine Learning A-Z", category: "Data Science", duration: "8 Weeks", price: "$129", imageKey: "ml-course", description: "Comprehensive guide to machine learning algorithms and applications.", pathType: "Career Path" },
  { id: 6, title: "Digital Marketing Essentials", category: "Marketing", duration: "3 Weeks", price: "$39", imageKey: "marketing-course", description: "Learn the core concepts of digital marketing including SEO, SEM, and SMM.", pathType: "Skill Path" },
];


const CoursesPage = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [pathFilter, setPathFilter] = useState('all');

  const handleFeatureNotImplemented = () => {
    toast({
      title: "🚧 Feature Not Implemented",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const filteredCourses = mockCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPath = pathFilter === 'all' || course.pathType === pathFilter;
    return matchesSearch && matchesPath;
  });

  return (
    <>
      <Helmet>
        <title>Courses - CodersZonee</title>
        <meta name="description" content="Explore a wide range of courses on CodersZonee. Find your next learning adventure." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-12 px-4"
      >
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#FF6B35] mb-4">Our Courses</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Find the perfect course to enhance your skills and knowledge.
          </p>
        </header>

        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center p-4 bg-slate-800 rounded-lg shadow-md">
          <div className="relative flex-grow w-full md:w-auto">
            <Input 
              type="search" 
              placeholder="Search courses by title, keyword, category..." 
              className="pl-10 bg-slate-700 border-slate-600 text-white focus:border-[#FF6B35] h-12 text-base" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
          </div>
          <Select value={pathFilter} onValueChange={setPathFilter}>
            <SelectTrigger className="w-full md:w-[200px] bg-slate-700 border-slate-600 text-white h-12 text-base">
              <SelectValue placeholder="Filter by Path" />
            </SelectTrigger>
            <SelectContent className="bg-slate-700 text-white border-slate-600">
              <SelectItem value="all">All Paths</SelectItem>
              <SelectItem value="Skill Path">Skill Path</SelectItem>
              <SelectItem value="Career Path">Career Path</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-black w-full md:w-auto h-12 text-base" onClick={handleFeatureNotImplemented}>
            <FilterIcon className="mr-2 h-4 w-4" /> More Filters
          </Button>
        </div>

        {filteredCourses.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="bg-slate-800 border-slate-700 text-white h-full flex flex-col overflow-hidden hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300 transform hover:-translate-y-1">
                  <img  alt={`${course.title} thumbnail`} className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1701723140471-9f7ed02db0c1" />
                  <CardHeader>
                    <CardTitle className="text-[#FF6B35] text-xl">{course.title}</CardTitle>
                    <div className="flex justify-between items-center">
                      <CardDescription className="text-slate-400">{course.category}</CardDescription>
                      <span className="text-xs bg-orange-600/30 text-[#FF6B35] px-2 py-1 rounded-full">{course.pathType}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-slate-300 mb-4 text-sm">{course.description}</p>
                    <div className="flex justify-between items-center text-sm text-slate-400 mb-4">
                      <span>Duration: {course.duration}</span>
                      <span className="font-bold text-lg text-[#FF6B35]">{course.price}</span>
                    </div>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Button className="w-full bg-[#FF6B35] text-black hover:bg-orange-400" onClick={handleFeatureNotImplemented}>
                      View Course
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-10"
          >
            <p className="text-2xl text-slate-400">No courses match your criteria. Try adjusting your search or filters!</p>
          </motion.div>
        )}
      </motion.div>
    </>
  );
};

export default CoursesPage;
