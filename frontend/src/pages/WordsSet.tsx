import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Left_Sidebar from "../components/L_Sidebar";
import Right_Sidebar from "../components/R_Sidebar";
import SinhalaTyping from "../components/SinhalaTyping";
import axios from "axios";

const API_BASE_URL = "http://localhost:5000"; // Adjust this to match your Flask backend URL

const WordsSet: React.FC = () => {
  const categories = [
    { id: 'samana', name: 'සමාන පද', endpoint: '/api/synonym-words', columnName: 'සමාන වචන' },
    { id: 'viruddha', name: 'විරුද්ධ පද', endpoint: '/antonyms-words', columnName: 'විරුද්ධ වචන' },
    { id: 'yugala', name: 'යුගල පද', endpoint: '/paired-words', columnName: 'යුගල වචන' }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('samana');
  const [results, setResults] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [allData, setAllData] = useState<any[][]>([[], [], []]);
  const [initialLoading, setInitialLoading] = useState(true);
  const [displayData, setDisplayData] = useState<any[]>([]);

  // Get current category details
  const getCurrentCategory = () => {
    return categories.find(cat => cat.id === activeCategory) || categories[0];
  };

  // Get current category index
  const getCategoryIndex = () => {
    return categories.findIndex(cat => cat.id === activeCategory);
  };

  // Load initial data from API
  useEffect(() => {
    const fetchInitialData = async () => {
      setInitialLoading(true);
      try {
        const response = await axios.get(`${API_BASE_URL}/api/get-parquet-data`);
        if (response.data && Array.isArray(response.data)) {
          setAllData(response.data);
          // Set display data based on active category
          const categoryIndex = getCategoryIndex();
          setDisplayData(response.data[categoryIndex] || []);
        }
      } catch (err) {
        console.error("Error fetching initial data:", err);
        setError('දත්ත ලබා ගැනීමේ දෝෂයකි. කරුණාකර නැවත උත්සාහ කරන්න.');
      } finally {
        setInitialLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  // Update display data when category changes
  useEffect(() => {
    const categoryIndex = getCategoryIndex();
    setDisplayData(allData[categoryIndex] || []);
  }, [activeCategory, allData]);

  // Handle search when a word is entered
  useEffect(() => {
    if (!searchTerm.trim()) {
      // When search is empty, show all data for the current category
      const categoryIndex = getCategoryIndex();
      setDisplayData(allData[categoryIndex] || []);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError('');
      
      try {
        const category = getCurrentCategory();
        const response = await axios.post(`${API_BASE_URL}${category.endpoint}`, {
          word: searchTerm
        });

        if (response.data && response.data.response) {
          // Store just the array of related words
          setResults(response.data.response);
        } else {
          setResults([]);
        }
      } catch (err) {
        console.error("Error fetching words:", err);
        setError('දත්ත ලබා ගැනීමේ දෝෂයකි. කරුණාකර නැවත උත්සාහ කරන්න.');
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    // Add debounce to prevent too many API calls while typing
    const debounceTimer = setTimeout(() => {
      fetchData();
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [searchTerm, activeCategory]);

  // Handle category change
  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setSearchTerm(''); // Clear search term when changing category
    setResults([]); // Clear search results
  };

  // Handle search input change
  const handleSearchChange = (newValue: string) => {
    setSearchTerm(newValue);
  };

  // Get data to display based on search state
  const getTableData = () => {
    if (searchTerm.trim() && results.length > 0) {
      // If searching and have results, show search results as strings
      return results.map((word) => ({ word }));
    } else if (searchTerm.trim()) {
      // If searching but no results, return empty to show "not found" message
      return [];
    } else {
      // If not searching, show all data for category
      return displayData;
    }
  };

  return (
    <div className="relative size-full flex flex-col">
      <Header />
      <div className="flex">
        <Left_Sidebar />
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-4xl p-4">
            <div className="max-w-4xl mx-auto p-6">
              <div className="flex justify-center space-x-4 mb-8">
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`px-6 py-2 rounded-lg transition-colors ${
                      activeCategory === category.id
                        ? 'bg-[#0d8065] text-white cursor-pointer font-CCWelikala hover:bg-[#0d8065] hover:text-white hover:scale-110 transition duration-400'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => handleCategoryChange(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              <div className="mb-8">
                <SinhalaTyping
                  placeholder="වචන සොයන්න..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  variant="input"
                  size="md"
                  className="w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      {/* Show column names based on the data structure */}
                      {!searchTerm.trim() && displayData.length > 0 && displayData[0] && (
                        Object.keys(displayData[0]).map((key, index) => (
                          <th key={index}>
                          </th>
                        ))
                      )}
                      {/* Show single column for search results */}
                      {searchTerm.trim() && (
                        <th className="px-6 py-3 text-left text-gray-700 font-semibold">
                          {getCurrentCategory().columnName}
                        </th>
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {initialLoading || loading ? (
                      <tr>
                        <td className="px-6 py-4 text-center" colSpan={searchTerm.trim() ? 1 : Object.keys(displayData[0] || {}).length || 1}>
                          <div className="flex justify-center">
                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900"></div>
                          </div>
                        </td>
                      </tr>
                    ) : error ? (
                      <tr>
                        <td className="px-6 py-4 text-center text-red-500" colSpan={searchTerm.trim() ? 1 : Object.keys(displayData[0] || {}).length || 1}>
                          {error}
                        </td>
                      </tr>
                    ) : getTableData().length > 0 ? (
                      getTableData().map((row, rowIndex) => (
                        <tr 
                          key={rowIndex}
                          className="border-t border-gray-200 hover:bg-gray-50 transition-colors"
                        >
                          {searchTerm.trim() && results.length > 0 ? (
                            // Display search results as a single column
                            <td className="px-6 py-4">{row.word}</td>
                          ) : (
                            // Display all columns from the data
                            Object.values(row).map((value: any, colIndex) => (
                              <td key={colIndex} className="px-6 py-4">{value}</td>
                            ))
                          )}
                        </tr>
                      ))
                    ) : searchTerm.trim() ? (
                      <tr>
                        <td className="px-6 py-4 text-center text-gray-500" colSpan={searchTerm.trim() ? 1 : Object.keys(displayData[0] || {}).length || 1}>
                          වචන හමු නොවීය
                        </td>
                      </tr>
                    ) : (
                      <tr>
                        <td className="px-6 py-4 text-center text-gray-500" colSpan={Object.keys(displayData[0] || {}).length || 1}>
                          දත්ත නොමැත
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <Right_Sidebar />
      </div>
    </div>
  );
}

export default WordsSet;