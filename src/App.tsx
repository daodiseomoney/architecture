import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    // Interactive elements for layers
    const layers = document.querySelectorAll('.layer');
    
    const handleMouseEnter = (event: Event) => {
      const target = event.target as HTMLElement;
      target.style.transform = 'translateY(-5px) scale(1.02)';
    };
    
    const handleMouseLeave = (event: Event) => {
      const target = event.target as HTMLElement;
      target.style.transform = 'translateY(0) scale(1)';
    };
    
    layers.forEach(layer => {
      layer.addEventListener('mouseenter', handleMouseEnter);
      layer.addEventListener('mouseleave', handleMouseLeave);
    });
    
    // Animate the central brain
    const brain = document.querySelector('.central-brain') as HTMLElement;
    const animateBrain = () => {
      if (brain) {
        brain.style.transform = 'scale(1.01)';
        setTimeout(() => {
          brain.style.transform = 'scale(1)';
        }, 500);
      }
    };
    
    const brainInterval = setInterval(animateBrain, 3000);
    
    // Cleanup
    return () => {
      layers.forEach(layer => {
        layer.removeEventListener('mouseenter', handleMouseEnter);
        layer.removeEventListener('mouseleave', handleMouseLeave);
      });
      clearInterval(brainInterval);
    };
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h1 className="title">🧠 DAODISEO AI BRAIN</h1>
        <p className="subtitle">Revolutionary 5-Layer Architecture for Conversational Real World Assets</p>
        <div className="methodology-badge">⚡ 4-Day Methodology Implementation</div>
      </div>
      
      <div className="architecture-grid">
        {/* Left Column - Layers 1-2 */}
        <div className="layer-column">
          <div className="layer layer-1">
            <div className="layer-number">1️⃣</div>
            <div className="layer-title">Ethics Layer</div>
            <div className="layer-description">
              • AI Safety & Responsible Automation<br />
              • Data Privacy & Security<br />
              • Transparent Decision Making<br />
              • Regulatory Compliance<br />
              • Bias Prevention & Fairness
            </div>
          </div>
          
          <div className="layer layer-2">
            <div className="layer-number">2️⃣</div>
            <div className="layer-title">Business Layer</div>
            <div className="layer-description">
              • Real Estate Workflows<br />
              • Stakeholder Management<br />
              • Investment Decision Support<br />
              • Risk Assessment & Mitigation<br />
              • Performance Analytics
            </div>
          </div>
        </div>
        
        {/* Central Brain */}
        <div className="central-brain">
          <div className="brain-icon">🤖</div>
          <div className="brain-title">DAODISEO AI BRAIN</div>
          
          <div className="mcp-highlight">
            🔗 MCP (Model Context Protocol) Integration<br />
            Ready for Claude Web + API Extensions
          </div>
          
          <div className="tech-stack">
            <div className="tech-item">🧠 Anthropic Claude<br />Haiku → Sonnet</div>
            <div className="tech-item">📚 Advanced RAG<br />GraphRAG + Hybrid</div>
            <div className="tech-item">🔄 Multi-DB Strategy<br />SQL + Graph + Vector</div>
            <div className="tech-item">🎨 AI Frameworks<br />Langchain + Neo4j</div>
          </div>
          
          <div className="mcp-highlight expert-validation">
            ✅ Expert Validated by Pavel (R&D RE Development Engineer)<br />
            Enhanced with Production-Grade Data Architecture
          </div>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-day">Day 1</div>
              <div className="timeline-task">Architecture + Specs</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-day">Day 2</div>
              <div className="timeline-task">Core Implementation</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-day">Day 3</div>
              <div className="timeline-task">Integration + Testing</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-day">Day 4</div>
              <div className="timeline-task">Launch + Documentation</div>
            </div>
          </div>
        </div>
        
        {/* Right Column - Layers 3-5 */}
        <div className="layer-column">
          <div className="layer layer-3">
            <div className="layer-number">3️⃣</div>
            <div className="layer-title">RWA Domain</div>
            <div className="layer-description">
              • Physical Asset Integration<br />
              • Tokenization & Blockchain<br />
              • Property Data Management<br />
              • ODIS Token Economics<br />
              • DAO Governance
            </div>
          </div>
          
          <div className="layer layer-4">
            <div className="layer-number">4️⃣</div>
            <div className="layer-title">Digital Twin</div>
            <div className="layer-description">
              • BIM Server + IFC Processing<br />
              • Document OCR (Mistral/VLLM)<br />
              • Graph Relationships (Neo4j)<br />
              • Vector Search (Qdrant)<br />
              • "Talk to Buildings" AI
            </div>
          </div>
          
          <div className="layer layer-5">
            <div className="layer-number">5️⃣</div>
            <div className="layer-title">Custom Extensions</div>
            <div className="layer-description">
              • Project-Specific Features<br />
              • Client Customizations<br />
              • Industry Adaptations<br />
              • Advanced Analytics<br />
              • Future Integrations
            </div>
          </div>
        </div>
      </div>
      
      <div className="expert-validation-section">
        <h3 className="expert-title">
          ✅ Expert Technical Validation by Pavel (R&D RE Development Engineer)
        </h3>
        
        <div className="expert-grid">
          <div className="expert-item">
            <h4 className="expert-item-title">📄 Document Processing</h4>
            <div className="expert-item-content">
              • PyMuPDF for PDF extraction<br />
              • Mistral OCR + VLLM for scanned docs<br />
              • MarkItdown + LangExtract structuring<br />
              • LLM structured output pipelines
            </div>
          </div>
          
          <div className="expert-item">
            <h4 className="expert-item-title">🗃️ Multi-Database Strategy</h4>
            <div className="expert-item-content">
              • PostgreSQL for structured data<br />
              • MongoDB for document storage<br />
              • Qdrant for vector embeddings<br />
              • Neo4j for property relationships
            </div>
          </div>
          
          <div className="expert-item">
            <h4 className="expert-item-title">🤖 Advanced AI Stack</h4>
            <div className="expert-item-content">
              • GraphRAG + CAG + KAG + Hybrid<br />
              • Langchain + Langgraph frameworks<br />
              • Pydantic-AI for structured output<br />
              • Git + DVC for version control
            </div>
          </div>
        </div>
        
        <div className="expert-conclusion">
          <strong>4-Day Methodology + Expert Architecture = Production-Ready Enterprise System</strong>
        </div>
      </div>
      
      <div className="benefits">
        <div className="benefit">
          <div className="benefit-icon">⚡</div>
          <div className="benefit-title">Lightning Fast</div>
          <div>4-day delivery vs months of traditional development</div>
        </div>
        <div className="benefit">
          <div className="benefit-icon">💰</div>
          <div className="benefit-title">Cost Efficient</div>
          <div>$255 vs $258,000 traditional quotes</div>
        </div>
        <div className="benefit">
          <div className="benefit-icon">🏗️</div>
          <div className="benefit-title">Production Ready</div>
          <div>Enterprise-grade architecture from day one</div>
        </div>
      </div>
      
      <div className="footer">
        <div className="footer-title">🚀 From v0.1 to v1.0: Expert-Validated Evolution Path</div>
        <p>Start with MVP conversational RWA → Scale to enterprise platform with Pavel's advanced data architecture</p>
        <p><strong>Proven Methodology • Expert Collaboration • Production-Grade Technology • Revolutionary Results</strong></p>
        <div className="collaboration-highlight">
          <strong>✅ Business Vision (Free Man) + Technical Excellence (Pavel) + 4-Day Execution (Maksim) = Legendary Platform</strong>
        </div>
      </div>
    </div>
  );
}

export default App;