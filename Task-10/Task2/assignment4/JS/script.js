let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

// "https?"
// Matches `http` or `https`
// `s?` makes `s` optional

// ":\/\/":
// Matches `://`

// "(?:[-\w]+\.)?":
// `(?:)` Match expression but do not capture it.
// `[-\w]+` Matches one or more word characters (alphanumeric characters and underscores) or hyphens.
// `\.` Escaped dot, matches a literal dot (.).
// `()?` ? at end indicate to entire group matches an optional subdomain

// "([-\w]+)":
// Capturing group that matches the main part of the domain name
// `[-\w]+` Matches one or more word characters or hyphens.

// "\.\w+":
// Matches a literal dot followed by one or more word characters.
// This typically matches the top-level domain (TLD) like ".com", ".org", etc.

// (?:\.\w+)?:
// Non-capturing group that matches an optional additional dot followed by one or more word characters.
// This is for matching domains with multiple parts, like ".co.uk".

// \/?:
// The ? makes the slash optional, so it matches both with or without a trailing slash.

// .*:
// Matches zero or more of any character (except for line terminators).
// This matches the rest of the URL, like a path, query parameters, etc.

// i (modifier):
// Case-insensitive match.