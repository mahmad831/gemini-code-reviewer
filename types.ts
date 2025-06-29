export type SuggestionType = 'Bug' | 'Performance' | 'Style' | 'Security' | 'Best Practice' | 'Unknown';

export interface Suggestion {
  line_number: number | null;
  type: SuggestionType;
  suggestion: string;
  code_snippet: string | null;
}

export interface ReviewFeedback {
  overall_summary: string;
  suggestions: Suggestion[];
}
