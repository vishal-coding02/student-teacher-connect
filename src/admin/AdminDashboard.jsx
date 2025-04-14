import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function AdminDashboardUI() {
  const [activeTab, setActiveTab] = useState("requests");

  // Sample data for UI demonstration
  const pendingRequests = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      expertise: "React, Node.js",
      bio: "Experienced full-stack developer",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      expertise: "UI/UX Design",
      bio: "Professional designer with 5+ years experience",
    },
  ];

  const approvedMentors = [
    {
      id: 1,
      name: "Alex Johnson",
      email: "alex@example.com",
      expertise: "Python, Machine Learning",
    },
    {
      id: 2,
      name: "Sarah Williams",
      email: "sarah@example.com",
      expertise: "JavaScript, React",
    },
  ];

  const allUsers = [
    {
      id: 1,
      name: "User One",
      email: "user1@example.com",
      role: "student",
    },
    {
      id: 2,
      name: "User Two",
      email: "user2@example.com",
      role: "mentor",
    },
    {
      id: 3,
      name: "Admin User",
      email: "admin@example.com",
      role: "admin",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans">
      <Navbar />

      <section className="bg-gradient-to-br from-gray-800 via-gray-900 to-blue-900 pt-24 pb-20 min-h-screen">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto bg-gray-800 p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-center text-white mb-8">
              Admin Dashboard
            </h2>

            {/* Tabs */}
            <div className="flex border-b border-gray-700 mb-6">
              <button
                className={`py-2 px-4 font-medium ${
                  activeTab === "requests"
                    ? "text-yellow-400 border-b-2 border-yellow-400"
                    : "text-gray-400"
                }`}
                onClick={() => setActiveTab("requests")}
              >
                Pending Requests ({pendingRequests.length})
              </button>
              <button
                className={`py-2 px-4 font-medium ${
                  activeTab === "mentors"
                    ? "text-yellow-400 border-b-2 border-yellow-400"
                    : "text-gray-400"
                }`}
                onClick={() => setActiveTab("mentors")}
              >
                Approved Mentors ({approvedMentors.length})
              </button>
              <button
                className={`py-2 px-4 font-medium ${
                  activeTab === "users"
                    ? "text-yellow-400 border-b-2 border-yellow-400"
                    : "text-gray-400"
                }`}
                onClick={() => setActiveTab("users")}
              >
                All Users ({allUsers.length})
              </button>
            </div>

            {/* Pending Requests Tab */}
            {activeTab === "requests" && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-yellow-400 mb-4">
                  Pending Mentor Requests
                </h3>
                {pendingRequests.length === 0 ? (
                  <p className="text-gray-400">No pending requests</p>
                ) : (
                  <div className="grid gap-4 md:grid-cols-2">
                    {pendingRequests.map((request) => (
                      <div
                        key={request.id}
                        className="bg-gray-700 p-4 rounded-lg"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="text-lg font-medium text-white">
                              {request.name}
                            </h4>
                            <p className="text-yellow-400">{request.email}</p>
                            <p className="text-gray-300 mt-2">
                              {request.expertise}
                            </p>
                            <p className="text-gray-400 text-sm mt-2">
                              {request.bio}
                            </p>
                          </div>
                          <div className="flex space-x-2">
                            <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm">
                              Approve
                            </button>
                            <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm">
                              Reject
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Approved Mentors Tab */}
            {activeTab === "mentors" && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-yellow-400 mb-4">
                  Approved Mentors
                </h3>
                {approvedMentors.length === 0 ? (
                  <p className="text-gray-400">No approved mentors</p>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-gray-700 rounded-lg overflow-hidden">
                      <thead className="bg-gray-600">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                            Name
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                            Email
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                            Expertise
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-600">
                        {approvedMentors.map((mentor) => (
                          <tr key={mentor.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {mentor.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {mentor.email}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {mentor.expertise}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-3 py-1 rounded text-sm mr-2">
                                Edit
                              </button>
                              <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm">
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {/* All Users Tab */}
            {activeTab === "users" && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-yellow-400 mb-4">
                  All Users
                </h3>
                {allUsers.length === 0 ? (
                  <p className="text-gray-400">No users found</p>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-gray-700 rounded-lg overflow-hidden">
                      <thead className="bg-gray-600">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                            Name
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                            Email
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                            Role
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-600">
                        {allUsers.map((user) => (
                          <tr key={user.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {user.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {user.email}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap capitalize">
                              <span
                                className={`px-2 py-1 rounded-full text-xs ${
                                  user.role === "admin"
                                    ? "bg-purple-600 text-white"
                                    : user.role === "mentor"
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-600 text-white"
                                }`}
                              >
                                {user.role}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm">
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AdminDashboardUI;
