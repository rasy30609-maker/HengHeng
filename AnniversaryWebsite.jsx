import React from 'react';
import { Heart, Calendar, MapPin, Users, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const App = () => {
  const photoGallery = [
   'https://photos.app.goo.gl/7vJqutJKccefrcbo6',
    'https://photos.app.goo.gl/sD4gGab9k5w8oUN56',
    'https://photos.app.goo.gl/cCGDGwqLtYWKpEzH9',
    'https://photos.app.goo.gl/tfLN8UPUvV9uBHdJ9',
    'https://photos.app.goo.gl/HzAP9N1zthRcjZGE6',
    'https://photos.app.goo.gl/7Hhxqs6Hzj1XzXDd7'
  ];

  const loveNotes = [
    "អូនសម្លាញ់ជាអ្វីដែលបងស្រលាញ់ជាងគេក្នុងជីវិតនេះ 💗",
    "រាល់ថ្ងៃដែលមានអូននៅក្បែរ គឺជាថ្ងៃដ៏សុខសាន្តបំផុតសម្រាប់បង",
    "អូនជានារីដែលបងស្រលាញ់ខ្លាំង ហើយនឹងថែរក្សាអូនជានិច្ច",
    "តាំងពីថ្ងៃដែលយើងស្គាល់គ្នា បងដឹងថាអូនគឺជាមនុស្សសម្រាប់បង",
    "សង្ឃឹមថាយើងនឹងមាន memory ល្អជាមួយគ្នារហូតដល់ចុងបញ្ចប់នៃជីវិត"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-400/20 to-purple-400/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Heart className="w-5 h-5 text-rose-500" fill="currentColor" />
              <span className="text-rose-600 font-medium">122 Days Anniversary</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-rose-800 mb-6">
              Happy Anniversary!
            </h1>
            <p className="text-xl text-rose-600 max-w-2xl mx-auto">
              យើងទាំងពីរអ្នក ❤️
            </p>
          </motion.div>
        </div>
      </header>

      {/* Anniversary Countdown */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-rose-800 mb-4">122 ថ្ងៃនៃសេចក្តីស្រឡាញ់</h2>
          <div className="flex justify-center gap-6">
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6 min-w-24"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold text-rose-600">122</div>
              <div className="text-rose-400">ថ្ងៃ</div>
            </motion.div>
          </div>
        </div>

        {/* Love Letter */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <div className="text-center mb-6">
            <Heart className="w-12 h-12 text-rose-500 mx-auto mb-4" fill="currentColor" />
            <h3 className="text-2xl font-bold text-rose-800">សំបុត្រស្នេហ៍ពីបង</h3>
          </div>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-center">
            <p className="mb-4">
              អូនសម្លាញ់,
            </p>
            <p className="mb-4">
              បងស្រលាញ់អូនណាស់! តាំងពីយើងស្គាល់គ្នាដំបូង បងស្រលាញ់អូនតាំងទី 7 មក។ 
              អូនជានារីម្នាក់ដែលតែងតែនៅក្បែរបង និងលើកទឹកចិត្តបងជានិច្ច។
            </p>
            <p className="mb-4">
              អូនក៏ជានារីម្នាក់ដែលបងស្រលាញ់ខ្លាំង! សង្ឃឹមថាពួកយើងមាន memory ល្អជាមួយគ្នា រហូតណាអូនសម្លាញ់ 💗
            </p>
            <p className="font-semibold text-rose-600">
              ស្រឡាញ់អូនជានិច្ច,<br/>
              ពីបងដែលស្រលាញ់អូន
            </p>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Sparkles className="w-6 h-6 text-rose-500" />
            <h3 className="text-2xl font-bold text-rose-800">Memory ដ៏ពិសេស</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {photoGallery.map((photo, index) => (
              <motion.div
                key={index}
                className="overflow-hidden rounded-xl shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <img 
                  src={photo} 
                  alt={`Memory ${index + 1}`} 
                  className="w-full h-48 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Love Notes */}
        <div className="bg-gradient-to-r from-rose-500 to-purple-500 rounded-2xl p-8 text-white">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <Heart className="w-6 h-6" fill="white" />
            <h3 className="text-2xl font-bold">ពាក្យពីបេះដូងបង</h3>
          </div>
          <div className="space-y-4">
            {loveNotes.map((note, index) => (
              <motion.div
                key={index}
                className="bg-white/20 backdrop-blur-sm rounded-xl p-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <p className="text-white">{note}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Celebration Details */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mt-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-5 h-5 text-rose-500" />
                <h4 className="text-xl font-bold text-rose-800">Anniversary យើង</h4>
              </div>
              <p className="text-gray-700">
                <strong>ថ្ងៃគ្រប់គ្រង់:</strong> {new Date().toLocaleDateString('km-KH')}<br />
                <strong>ថ្ងៃសរសេរ:</strong> 122 ថ្ងៃ<br />
                <strong>អនាគត:</strong> រហូតដល់ចុងបញ្ចប់នៃជីវិត 💗
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-rose-500" />
                <h4 className="text-xl font-bold text-rose-800">ទីកន្លែងពិសេស</h4>
              </div>
              <p className="text-gray-700">
                <strong>ទីកន្លែងដែលយើងជួបគ្នា:</strong> ទីកន្លែងដ៏អស្ចារ្យបំផុតក្នុងជីវិតបង<br />
                <strong>ទីកន្លែងដែលយើងនឹងទៅ:</strong> គ្រប់ទីកន្លែងដែលមានអូន
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center py-12">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-rose-500" fill="currentColor" />
            <span className="text-2xl font-bold text-rose-800">ស្រលាញ់អូនជានិច្ច 💗</span>
            <Heart className="w-6 h-6 text-rose-500" fill="currentColor" />
          </div>
          <p className="text-rose-600 italic">
            "អូនសម្លាញ់ជាអ្វីដែលបងស្រលាញ់ជាងគេក្នុងជីវិតនេះ"
          </p>
        </footer>
      </section>
    </div>
  );
};

export default App;
