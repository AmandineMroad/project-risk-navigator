import { MessageSquare, ThumbsUp } from "lucide-react";

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
  }
];

export const DiscussTab = () => {
  return (
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
  );
};