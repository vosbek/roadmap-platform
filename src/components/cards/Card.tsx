import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Calendar, ArrowRightCircle, ArrowLeftCircle } from 'lucide-react';

type CardStatus = 
  | 'Not Started'
  | 'In Planning'
  | 'In Progress'
  | 'Testing'
  | 'Completed'
  | 'Blocked'
  | 'On Hold'
  | 'Cancelled';

interface Card {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  status: CardStatus;
}

interface CardReference {
  id: string;
  sourceCardId: string;
  targetCardId: string;
  referenceType: string;
}

interface CardProps {
  card: Card;
  incomingReferences?: CardReference[];
  outgoingReferences?: CardReference[];
  onEdit?: () => void;
}

const statusStyles: Record<CardStatus, string> = {
  'Not Started': 'bg-slate-100 text-slate-600',
  'In Planning': 'bg-[#1C57A5] bg-opacity-10 text-[#1C57A5]',
  'In Progress': 'bg-[#1C57A5] bg-opacity-10 text-[#1C57A5]',
  'Testing': 'bg-purple-50 text-purple-600',
  'Completed': 'bg-green-50 text-green-600',
  'Blocked': 'bg-red-50 text-red-600',
  'On Hold': 'bg-amber-50 text-amber-600',
  'Cancelled': 'bg-slate-100 text-slate-600'
};

const StatusBadge = ({ status }: { status: CardStatus }) => (
  <span className={`px-3 py-1 text-sm font-medium rounded-full ${statusStyles[status]}`}>
    {status}
  </span>
);

const Card: React.FC<CardProps> = ({
  card,
  incomingReferences = [],
  outgoingReferences = [],
  onEdit
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    }).format(new Date(date));
  };

  const ReferenceList = ({ references, isIncoming }: { references: CardReference[], isIncoming: boolean }) => (
    <div className="space-y-2">
      {references.map((ref) => (
        <div key={ref.id} className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
          {isIncoming ? 
            <ArrowLeftCircle size={20} className="text-[#1C57A5]" /> : 
            <ArrowRightCircle size={20} className="text-[#1C57A5]" />
          }
          <div>
            <div className="font-medium text-slate-900">{ref.sourceCardId}</div>
            <div className="text-sm text-slate-500">{ref.referenceType}</div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full">
      <div className={`bg-white rounded-lg shadow-sm border border-slate-200 transition-all duration-200
        hover:shadow-md ${isExpanded ? 'ring-2 ring-[#1C57A5] ring-opacity-20' : ''}`}>
        
        {/* Collapsed View */}
        <div 
          className="p-4 cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex justify-between items-start gap-4">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
              <div className="flex items-center gap-4 mt-2 text-sm text-slate-600">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  {formatDate(card.startDate)} - {formatDate(card.endDate)}
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <StatusBadge status={card.status} />
              
              {(incomingReferences.length > 0 || outgoingReferences.length > 0) && (
                <div className="flex gap-2">
                  {incomingReferences.length > 0 && (
                    <span className="text-xs bg-[#1C57A5] bg-opacity-10 text-[#1C57A5] px-2 py-1 rounded-full">
                      {incomingReferences.length} In
                    </span>
                  )}
                  {outgoingReferences.length > 0 && (
                    <span className="text-xs bg-[#1C57A5] bg-opacity-10 text-[#1C57A5] px-2 py-1 rounded-full">
                      {outgoingReferences.length} Out
                    </span>
                  )}
                </div>
              )}
              
              {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
          </div>
        </div>

        {/* Expanded View */}
        {isExpanded && (
          <div className="p-4 border-t border-slate-200">
            <div className="space-y-4">
              {/* Description */}
              <div>
                <h4 className="text-sm font-semibold text-slate-700 mb-1">Description</h4>
                <p className="text-slate-600">{card.description}</p>
              </div>

              {/* References */}
              {incomingReferences.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-slate-700 mb-2">Incoming References</h4>
                  <ReferenceList references={incomingReferences} isIncoming={true} />
                </div>
              )}

              {outgoingReferences.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-slate-700 mb-2">Outgoing References</h4>
                  <ReferenceList references={outgoingReferences} isIncoming={false} />
                </div>
              )}

              {/* Actions */}
              {onEdit && (
                <div className="flex justify-end">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onEdit();
                    }}
                    className="px-4 py-2 text-sm font-medium text-[#1C57A5] hover:bg-[#1C57A5]/5 rounded-lg"
                  >
                    Edit
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;