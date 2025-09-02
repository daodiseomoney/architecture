import React, { useState, useEffect } from 'react';
import './Dashboard.css';

interface Project {
  id: string;
  name: string;
  phase: 'Forming' | 'Feasibility' | 'Dealmaking' | 'Construction' | 'Operations';
  progress: number;
  stakeholders: number;
  lastUpdate: string;
  aiScore: number;
  location: string;
  value: string;
}

interface StakeholderActivity {
  id: string;
  stakeholder: string;
  action: string;
  project: string;
  timestamp: string;
  type: 'question' | 'upload' | 'approval' | 'analysis';
}

interface AIInsight {
  id: string;
  type: 'maintenance' | 'opportunity' | 'risk' | 'optimization';
  title: string;
  description: string;
  project: string;
  confidence: number;
  priority: 'high' | 'medium' | 'low';
}

const Dashboard: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [recentActivity, setRecentActivity] = useState<StakeholderActivity[]>([]);
  const [aiInsights, setAiInsights] = useState<AIInsight[]>([]);
  const [selectedStakeholder, setSelectedStakeholder] = useState<string>('overview');

  useEffect(() => {
    // Mock data - in real app, this would come from API
    setProjects([
      {
        id: '1',
        name: 'Arcadian Smart Village',
        phase: 'Construction',
        progress: 75,
        stakeholders: 12,
        lastUpdate: '2 hours ago',
        aiScore: 92,
        location: 'Vathy Bay, Ithaca, Greece',
        value: '$4,000,000'
      },
      {
        id: '2', 
        name: 'Marina Bay Residences',
        phase: 'Feasibility',
        progress: 45,
        stakeholders: 8,
        lastUpdate: '1 day ago',
        aiScore: 87,
        location: 'Singapore',
        value: '$12,500,000'
      },
      {
        id: '3',
        name: 'Tech Hub Office Tower',
        phase: 'Dealmaking',
        progress: 60,
        stakeholders: 15,
        lastUpdate: '3 hours ago',
        aiScore: 94,
        location: 'San Francisco, CA',
        value: '$8,200,000'
      }
    ]);

    setRecentActivity([
      {
        id: '1',
        stakeholder: 'Property Manager',
        action: 'Uploaded HVAC maintenance report',
        project: 'Arcadian Smart Village',
        timestamp: '15 minutes ago',
        type: 'upload'
      },
      {
        id: '2', 
        stakeholder: 'Investor',
        action: 'Asked about ROI projections',
        project: 'Marina Bay Residences',
        timestamp: '1 hour ago',
        type: 'question'
      },
      {
        id: '3',
        stakeholder: 'Appraiser',
        action: 'Completed valuation analysis',
        project: 'Tech Hub Office Tower', 
        timestamp: '2 hours ago',
        type: 'analysis'
      },
      {
        id: '4',
        stakeholder: 'Broker',
        action: 'Approved marketing materials',
        project: 'Arcadian Smart Village',
        timestamp: '4 hours ago',
        type: 'approval'
      }
    ]);

    setAiInsights([
      {
        id: '1',
        type: 'maintenance',
        title: 'HVAC System Optimization',
        description: 'Building A shows 23% energy efficiency improvement opportunity',
        project: 'Arcadian Smart Village',
        confidence: 94,
        priority: 'high'
      },
      {
        id: '2',
        type: 'opportunity', 
        title: 'Market Timing Advantage',
        description: 'Current market conditions favor accelerated construction timeline',
        project: 'Marina Bay Residences',
        confidence: 87,
        priority: 'medium'
      },
      {
        id: '3',
        type: 'risk',
        title: 'Permit Delay Risk',
        description: 'Environmental approval may delay construction by 2-3 weeks',
        project: 'Tech Hub Office Tower',
        confidence: 91,
        priority: 'high'
      }
    ]);
  }, []);

  const getPhaseColor = (phase: string) => {
    const colors = {
      'Forming': '#ff6b6b',
      'Feasibility': '#4ecdc4', 
      'Dealmaking': '#45b7d1',
      'Construction': '#96ceb4',
      'Operations': '#ffeaa7'
    };
    return colors[phase as keyof typeof colors] || '#gray';
  };

  const getStakeholderIcon = (stakeholder: string) => {
    const icons = {
      'Property Manager': '🔧',
      'Investor': '💰',
      'Appraiser': '📊',
      'Broker': '🤝',
      'Landlord': '🏢',
      'Tenant': '🏠',
      'Developer': '🏗️',
      'Mortgage Broker': '🏦'
    };
    return icons[stakeholder as keyof typeof icons] || '👤';
  };

  const getInsightIcon = (type: string) => {
    const icons = {
      'maintenance': '🔧',
      'opportunity': '💡',
      'risk': '⚠️',
      'optimization': '⚡'
    };
    return icons[type as keyof typeof icons] || '📋';
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="dashboard-header">
        <div className="header-content">
          <h1 className="dashboard-title">🧠 DAODISEO Dashboard</h1>
          <p className="dashboard-subtitle">Conversational Real World Assets Intelligence</p>
        </div>
        <div className="stakeholder-selector">
          <select 
            value={selectedStakeholder} 
            onChange={(e) => setSelectedStakeholder(e.target.value)}
            className="stakeholder-select"
          >
            <option value="overview">🎯 Overview</option>
            <option value="investor">💰 Investor View</option>
            <option value="manager">🔧 Property Manager View</option>
            <option value="broker">🤝 Broker View</option>
            <option value="developer">🏗️ Developer View</option>
          </select>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="quick-stats">
        <div className="stat-card">
          <div className="stat-icon">🏗️</div>
          <div className="stat-content">
            <div className="stat-number">{projects.length}</div>
            <div className="stat-label">Active Projects</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">👥</div>
          <div className="stat-content">
            <div className="stat-number">{projects.reduce((sum, p) => sum + p.stakeholders, 0)}</div>
            <div className="stat-label">Stakeholders</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🤖</div>
          <div className="stat-content">
            <div className="stat-number">{Math.round(projects.reduce((sum, p) => sum + p.aiScore, 0) / projects.length)}</div>
            <div className="stat-label">Avg AI Score</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">💬</div>
          <div className="stat-content">
            <div className="stat-number">{recentActivity.length}</div>
            <div className="stat-label">Today's Activity</div>
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        {/* Projects Overview */}
        <div className="dashboard-card projects-card">
          <div className="card-header">
            <h3>🏗️ Active Projects</h3>
            <button className="btn btn-primary">+ New Project</button>
          </div>
          <div className="projects-list">
            {projects.map(project => (
              <div key={project.id} className="project-item">
                <div className="project-header">
                  <div className="project-name">{project.name}</div>
                  <div className="project-value">{project.value}</div>
                </div>
                <div className="project-meta">
                  <div className="project-location">📍 {project.location}</div>
                  <div className="project-phase" style={{ backgroundColor: getPhaseColor(project.phase) }}>
                    {project.phase}
                  </div>
                </div>
                <div className="project-progress">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                  <span className="progress-text">{project.progress}%</span>
                </div>
                <div className="project-stats">
                  <span>👥 {project.stakeholders} stakeholders</span>
                  <span>🤖 AI Score: {project.aiScore}</span>
                  <span>🕒 {project.lastUpdate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Insights */}
        <div className="dashboard-card insights-card">
          <div className="card-header">
            <h3>🤖 AI Insights</h3>
            <span className="insights-count">{aiInsights.length} insights</span>
          </div>
          <div className="insights-list">
            {aiInsights.map(insight => (
              <div key={insight.id} className={`insight-item priority-${insight.priority}`}>
                <div className="insight-header">
                  <span className="insight-icon">{getInsightIcon(insight.type)}</span>
                  <div className="insight-title">{insight.title}</div>
                  <div className={`priority-badge ${insight.priority}`}>
                    {insight.priority}
                  </div>
                </div>
                <div className="insight-description">{insight.description}</div>
                <div className="insight-meta">
                  <span className="insight-project">🏗️ {insight.project}</span>
                  <span className="insight-confidence">🎯 {insight.confidence}% confidence</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="dashboard-card activity-card">
          <div className="card-header">
            <h3>📈 Recent Activity</h3>
            <span className="activity-count">Live updates</span>
          </div>
          <div className="activity-list">
            {recentActivity.map(activity => (
              <div key={activity.id} className="activity-item">
                <div className="activity-icon">
                  {getStakeholderIcon(activity.stakeholder)}
                </div>
                <div className="activity-content">
                  <div className="activity-stakeholder">{activity.stakeholder}</div>
                  <div className="activity-action">{activity.action}</div>
                  <div className="activity-project">🏗️ {activity.project}</div>
                </div>
                <div className="activity-time">{activity.timestamp}</div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Chat Interface */}
        <div className="dashboard-card chat-card">
          <div className="card-header">
            <h3>💬 Ask Your Buildings</h3>
            <span className="chat-status">🟢 AI Online</span>
          </div>
          <div className="chat-container">
            <div className="chat-messages">
              <div className="message ai-message">
                <div className="message-icon">🤖</div>
                <div className="message-content">
                  Hello! I'm your DAODISEO AI assistant. I can help you understand your properties. 
                  Try asking: "How is Arcadian Smart Village performing?"
                </div>
              </div>
            </div>
            <div className="chat-input-container">
              <input 
                type="text" 
                className="chat-input" 
                placeholder="Ask about your properties..."
              />
              <button className="chat-send">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;