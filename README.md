# Buhera Printing Press

This repository contains the source files for my book, managed using mdBook. The content is written in Markdown and can be compiled into various formats including HTML, PDF, and ePub.

## Project Structure

```
buhera-printing-press/
├── .github/            # GitHub Actions workflows
├── book.toml           # mdBook configuration
├── src/                # Source markdown files
│   ├── SUMMARY.md      # Book outline/Table of Contents
│   └── chapters/       # Individual chapter files
├── theme/              # Custom theme assets (optional)
└── book/              # Output directory (generated)
```

## Getting Started

1. Install mdBook:
   ```bash
   cargo install mdbook
   ```

2. Build the book:
   ```bash
   mdbook build
   ```

3. Serve locally for development:
   ```bash
   mdbook serve --open
   ```

## Writing Workflow

1. Add new chapters in the `src/chapters/` directory
2. Update `src/SUMMARY.md` to include new chapters
3. Run `mdbook serve` to preview changes in real-time
4. Commit and push changes to keep your work backed up

## Building the Book

- HTML: `mdbook build` (default)
- PDF: Use mdbook-pdf preprocessor
- ePub: Use mdbook-epub preprocessor

## Deployment

This book is automatically deployed to GitHub Pages when changes are pushed to the main branch. You can view the published version at: https://[your-username].github.io/buhera-printing-press/

## Contributing

This is a personal book project. Please do not submit pull requests unless explicitly invited to contribute.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
