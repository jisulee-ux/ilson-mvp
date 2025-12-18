import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Briefcase,
  Clock,
  DollarSign,
  Search,
  Filter,
  Star,
  Heart,
  ChevronDown,
  Building,
  Calendar,
  Users,
  CheckCircle,
  X
} from 'lucide-react';

const MVPPlatform = () => {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [selectedDistance, setSelectedDistance] = useState('전체');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilter, setShowFilter] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const categories = ['전체', '경비/보안', '청소/미화', '주차관리', '배달/운송', '급식/조리', '사무보조', '시설관리'];
  const distances = ['전체', '1km 이내', '3km 이내', '5km 이내', '10km 이내'];

  const jobs = [
    {
      id: 1,
      title: "아파트 경비원",
      company: "래미안 푸르지오",
      location: "서울 강남구 역삼동",
      distance: "0.8km",
      salary: "월 220만원",
      workTime: "주간 (08:00-18:00)",
      workDays: "주 5일",
      category: "경비/보안",
      requirements: "60세 이하, 성실한 분",
      benefits: ["4대보험", "식사제공", "휴게실"],
      posted: "오늘",
      urgent: true,
      rating: 4.5,
      reviews: 23
    },
    {
      id: 2,
      title: "학교 급식 보조",
      company: "역삼초등학교",
      location: "서울 강남구 역삼동",
      distance: "1.2km",
      salary: "시급 12,000원",
      workTime: "오전 (09:00-14:00)",
      workDays: "주 5일 (방학 제외)",
      category: "급식/조리",
      requirements: "건강한 분, 위생교육 이수자 우대",
      benefits: ["4대보험", "중식제공", "방학휴무"],
      posted: "1일 전",
      urgent: false,
      rating: 4.8,
      reviews: 45
    },
    {
      id: 3,
      title: "마트 주차관리",
      company: "이마트 역삼점",
      location: "서울 강남구 역삼동",
      distance: "1.5km",
      salary: "시급 11,000원",
      workTime: "오후 (14:00-22:00)",
      workDays: "주 4-5일",
      category: "주차관리",
      requirements: "운전면허증 소지자",
      benefits: ["4대보험", "직원할인", "교통비지원"],
      posted: "2일 전",
      urgent: false,
      rating: 4.2,
      reviews: 18
    },
    {
      id: 4,
      title: "오피스 청소원",
      company: "삼성SDS 빌딩",
      location: "서울 강남구 삼성동",
      distance: "2.3km",
      salary: "월 200만원",
      workTime: "새벽 (05:00-09:00)",
      workDays: "주 6일",
      category: "청소/미화",
      requirements: "성실하고 꼼꼼한 분",
      benefits: ["4대보험", "조식제공"],
      posted: "3일 전",
      urgent: false,
      rating: 4.0,
      reviews: 12
    },
    {
      id: 5,
      title: "배달 파트너",
      company: "쿠팡이츠",
      location: "서울 강남구 일대",
      distance: "자유",
      salary: "건당 4,000-8,000원",
      workTime: "자유 선택",
      workDays: "자유 선택",
      category: "배달/운송",
      requirements: "자차 또는 오토바이 소지",
      benefits: ["자유근무", "즉시지급", "인센티브"],
      posted: "상시",
      urgent: true,
      rating: 4.3,
      reviews: 156
    },
    {
      id: 6,
      title: "사무보조원",
      company: "강남구청",
      location: "서울 강남구 삼성동",
      distance: "2.8km",
      salary: "월 210만원",
      workTime: "주간 (09:00-18:00)",
      workDays: "주 5일",
      category: "사무보조",
      requirements: "컴퓨터 기초 가능자",
      benefits: ["4대보험", "중식제공", "공휴일휴무"],
      posted: "1주일 전",
      urgent: false,
      rating: 4.7,
      reviews: 34
    }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesCategory = selectedCategory === '전체' || job.category === selectedCategory;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFavorite = (jobId) => {
    setFavorites(prev =>
      prev.includes(jobId) ? prev.filter(id => id !== jobId) : [...prev, jobId]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-800">일손</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link to="/kakao" className="text-gray-600 hover:text-orange-500">
                알림설정
              </Link>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
                로그인
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="일자리, 회사명 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <button
              onClick={() => setShowFilter(!showFilter)}
              className="px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 flex items-center gap-2"
            >
              <Filter className="w-5 h-5" />
              필터
            </button>
          </div>

          {/* Filter Panel */}
          {showFilter && (
            <div className="mt-4 p-4 bg-gray-50 rounded-xl">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">카테고리</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1.5 rounded-full text-sm ${
                        selectedCategory === cat
                          ? 'bg-orange-500 text-white'
                          : 'bg-white border border-gray-200 text-gray-700 hover:border-orange-500'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">거리</label>
                <div className="flex flex-wrap gap-2">
                  {distances.map(dist => (
                    <button
                      key={dist}
                      onClick={() => setSelectedDistance(dist)}
                      className={`px-3 py-1.5 rounded-full text-sm ${
                        selectedDistance === dist
                          ? 'bg-orange-500 text-white'
                          : 'bg-white border border-gray-200 text-gray-700 hover:border-orange-500'
                      }`}
                    >
                      {dist}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Category Pills */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-6">
        {/* Results Count */}
        <div className="flex justify-between items-center mb-4">
          <p className="text-gray-600">
            <span className="font-semibold text-orange-500">{filteredJobs.length}개</span>의 일자리
          </p>
          <select className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500">
            <option>거리순</option>
            <option>최신순</option>
            <option>급여순</option>
            <option>인기순</option>
          </select>
        </div>

        {/* Job List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredJobs.map(job => (
            <div
              key={job.id}
              onClick={() => setSelectedJob(job)}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition cursor-pointer"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  {job.urgent && (
                    <span className="inline-block bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded-full mb-2">
                      급구
                    </span>
                  )}
                  <h3 className="text-lg font-bold text-gray-800">{job.title}</h3>
                  <p className="text-gray-600">{job.company}</p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(job.id);
                  }}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      favorites.includes(job.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'
                    }`}
                  />
                </button>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                  {job.location} · <span className="text-orange-500 ml-1">{job.distance}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <DollarSign className="w-4 h-4 mr-2 text-gray-400" />
                  <span className="font-semibold text-gray-800">{job.salary}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-2 text-gray-400" />
                  {job.workTime} · {job.workDays}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                {job.benefits.slice(0, 3).map((benefit, idx) => (
                  <span key={idx} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                    {benefit}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center pt-3 border-t">
                <div className="flex items-center text-sm text-gray-500">
                  <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                  {job.rating} ({job.reviews})
                </div>
                <span className="text-sm text-gray-400">{job.posted}</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Job Detail Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
              <h2 className="text-xl font-bold">{selectedJob.title}</h2>
              <button
                onClick={() => setSelectedJob(null)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                  <Building className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <p className="font-semibold">{selectedJob.company}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    {selectedJob.rating} ({selectedJob.reviews}개 리뷰)
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 rounded-xl p-4 mb-6">
                <div className="text-2xl font-bold text-orange-500 mb-1">{selectedJob.salary}</div>
                <p className="text-gray-600 text-sm">{selectedJob.workTime} · {selectedJob.workDays}</p>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">근무지</h4>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    {selectedJob.location} ({selectedJob.distance})
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">자격요건</h4>
                  <p className="text-gray-600">{selectedJob.requirements}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">복리후생</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedJob.benefits.map((benefit, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => toggleFavorite(selectedJob.id)}
                  className="flex-1 border border-gray-200 py-3 rounded-xl font-semibold hover:bg-gray-50 flex items-center justify-center"
                >
                  <Heart
                    className={`w-5 h-5 mr-2 ${
                      favorites.includes(selectedJob.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'
                    }`}
                  />
                  찜하기
                </button>
                <button className="flex-1 bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600">
                  지원하기
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quick Navigation */}
      <nav className="fixed bottom-4 right-4 z-40">
        <div className="bg-white rounded-lg shadow-lg p-3 space-y-2">
          <Link to="/" className="block px-4 py-2 hover:bg-gray-100 rounded text-sm font-medium">홈</Link>
          <Link to="/platform" className="block px-4 py-2 bg-orange-100 text-orange-600 rounded text-sm font-medium">플랫폼</Link>
          <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-100 rounded text-sm font-medium">대시보드</Link>
          <Link to="/kakao" className="block px-4 py-2 hover:bg-gray-100 rounded text-sm font-medium">카톡알림</Link>
        </div>
      </nav>
    </div>
  );
};

export default MVPPlatform;
