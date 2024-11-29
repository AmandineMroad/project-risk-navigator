import { Sidebar } from "../components/Sidebar";
import { ProcessFlow } from "../components/ProcessFlow";
import { Share2, Plus, MessageSquare, History, ThumbsUp } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const discussionMessages = [
    {
      id: 1,
      author: "Marie Lambert",
      avatar: "ML",
      date: "2 days ago",
      content: "When identifying risks in Input A, should we also consider indirect impacts on other project phases?",
      likes: 3,
      replies: [
        {
          id: 2,
          author: "Thomas Chen",
          avatar: "TC",
          date: "1 day ago",
          content: "Yes, it's crucial to consider cascade effects. I recommend using the ERiS template section 3.2 which specifically addresses indirect impacts.",
          likes: 5,
        }
      ]
    },
    {
      id: 3,
      author: "Sarah Johnson",
      avatar: "SJ",
      date: "5 days ago",
      content: "Has anyone successfully used the risk management template for a software development project? I'm particularly interested in how you handled technical debt risks.",
      likes: 7,
      replies: []
    },
    {
      id: 4,
      author: "Alex Martinez",
      avatar: "AM",
      date: "1 week ago",
      content: "Looking at the sequence diagram, I think we should add a feedback loop between ERiS and the task evaluation. This would help in continuous risk assessment.",
      likes: 4,
      replies: [
        {
          id: 5,
          author: "Patricia Wong",
          avatar: "PW",
          date: "6 days ago",
          content: "Good point! We've implemented something similar in our project. I can share our approach in the next risk management meeting.",
          likes: 2,
        }
      ]
    }
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1">
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold">Identify Risks</h1>
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <span>Process Owner</span>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-accent-blue/20" />
                  <span>HILDESINAR Fanny</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-text-secondary/20 text-sm">
                <Plus size={16} />
                <span>ADD TO FAVOURITES</span>
              </button>
              <button className="p-2 rounded-lg border border-text-secondary/20">
                <Share2 size={16} />
              </button>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-blue/20 text-accent-blue">
              <MessageSquare size={16} />
              <span>Explain</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-text-secondary/10">
              <span>Similar in ESA</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-text-secondary/10">
              <MessageSquare size={16} />
              <span>Discuss</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-text-secondary/10">
              <History size={16} />
              <span>Updates</span>
            </button>
          </div>
        </div>
        <div className="p-8 grid grid-cols-12 gap-8">
          <div className="col-span-3">
            <ProcessFlow />
          </div>
          <div className="col-span-6 space-y-8">
            <Tabs defaultValue="explain" className="w-full">
              <TabsList className="w-full bg-text-secondary/5 p-1">
                <TabsTrigger value="explain" className="flex-1">Explain</TabsTrigger>
                <TabsTrigger value="similar" className="flex-1">Similar in ESA</TabsTrigger>
                <TabsTrigger value="discuss" className="flex-1">Discuss</TabsTrigger>
                <TabsTrigger value="updates" className="flex-1">Updates</TabsTrigger>
              </TabsList>

              <TabsContent value="explain">
                <div className="p-6 rounded-lg bg-text-secondary/5 border border-border">
                  <p className="text-text-secondary">Content for Explain tab...</p>
                </div>
              </TabsContent>

              <TabsContent value="similar">
                <div className="p-6 rounded-lg bg-text-secondary/5 border border-border">
                  <p className="text-text-secondary">Similar processes in ESA will be displayed here.</p>
                </div>
              </TabsContent>

              <TabsContent value="discuss">
                <div className="space-y-6">
                  {discussionMessages.map((message) => (
                    <div key={message.id} className="p-6 rounded-lg bg-text-secondary/5 border border-border">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-accent-blue/20 flex items-center justify-center text-sm font-medium">
                          {message.avatar}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium">{message.author}</span>
                            <span className="text-sm text-text-secondary">{message.date}</span>
                          </div>
                          <p className="text-text-secondary mb-4">{message.content}</p>
                          <div className="flex items-center gap-4">
                            <button className="flex items-center gap-1 text-sm text-text-secondary hover:text-accent-blue transition-colors">
                              <ThumbsUp size={14} />
                              <span>{message.likes}</span>
                            </button>
                            <button className="flex items-center gap-1 text-sm text-text-secondary hover:text-accent-blue transition-colors">
                              <MessageSquare size={14} />
                              <span>Reply</span>
                            </button>
                          </div>
                          
                          {message.replies.length > 0 && (
                            <div className="mt-4 space-y-4 pl-6 border-l-2 border-text-secondary/20">
                              {message.replies.map((reply) => (
                                <div key={reply.id} className="flex items-start gap-4">
                                  <div className="w-8 h-8 rounded-full bg-accent-blue/20 flex items-center justify-center text-sm font-medium">
                                    {reply.avatar}
                                  </div>
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                      <span className="font-medium">{reply.author}</span>
                                      <span className="text-sm text-text-secondary">{reply.date}</span>
                                    </div>
                                    <p className="text-text-secondary mb-2">{reply.content}</p>
                                    <button className="flex items-center gap-1 text-sm text-text-secondary hover:text-accent-blue transition-colors">
                                      <ThumbsUp size={14} />
                                      <span>{reply.likes}</span>
                                    </button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="updates">
                <div className="p-6 rounded-lg bg-text-secondary/5 border border-border">
                  <p className="text-text-secondary">Recent updates will be displayed here.</p>
                </div>
              </TabsContent>
            </Tabs>

            <div className="relative p-6 rounded-lg bg-text-secondary/5 border border-border">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-full p-4 bg-text-secondary/10 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold">Input A</h3>
                </div>
                <div className="h-8 w-0.5 bg-accent-green"></div>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <div className="w-full p-4 bg-accent-green/20 rounded-lg border border-accent-green cursor-pointer">
                      <h3 className="text-lg font-semibold text-accent-green">Task Name</h3>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 bg-background border border-border">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold mb-2">Responsible</h4>
                        <button 
                          onClick={() => console.log("Navigate to Project Manager profile")}
                          className="w-full text-left p-2 rounded-lg bg-text-secondary/10 hover:bg-text-secondary/20 transition-colors"
                        >
                          Project Manager
                        </button>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold mb-2">Accountable</h4>
                        <button 
                          onClick={() => console.log("Navigate to Project Manager profile")}
                          className="w-full text-left p-2 rounded-lg bg-text-secondary/10 hover:bg-text-secondary/20 transition-colors"
                        >
                          Project Manager
                        </button>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold mb-2">Supporting</h4>
                        <div className="space-y-2">
                          <button 
                            onClick={() => console.log("Navigate to Project Team profile")}
                            className="w-full text-left p-2 rounded-lg bg-text-secondary/10 hover:bg-text-secondary/20 transition-colors"
                          >
                            Project Team
                          </button>
                          <button 
                            onClick={() => console.log("Navigate to Risk Management Facilitator profile")}
                            className="w-full text-left p-2 rounded-lg bg-text-secondary/10 hover:bg-text-secondary/20 transition-colors"
                          >
                            Project Risk Management Facilitator
                          </button>
                        </div>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
                <div className="h-8 w-0.5 bg-accent-green"></div>
                <div className="w-3/4 p-4 bg-text-secondary/10 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold text-center">ERiS</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Assets</h3>
              <div className="space-y-2">
                <button className="asset-button w-full">
                  <span>ERBS</span>
                  <span>→</span>
                </button>
                <button className="asset-button w-full">
                  <span>Risk management template</span>
                  <span className="text-accent-blue">UPDATED →</span>
                </button>
                <button className="asset-button w-full">
                  <span>[other template] - [Resource type]</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
