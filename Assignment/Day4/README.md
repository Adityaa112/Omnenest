## Feature 3: useToggle — Reusable Boolean Toggle Hook

This feature implements a custom React hook called useToggle to manage boolean (true / false) UI states in a clean and reusable way.

## Project Location

This feature is implemented inside the GROWW folder of the project.

The hook is located in GROWW/src/hooks/useToggle.js.

It is used in GROWW/src/components/ProductCard.jsx.

## What It Does

Manages toggle-based UI state using React hooks

Provides a single toggle() function to switch values

Maintains independent state per product card

## How It Works

useToggle internally uses useState

Accepts an optional initial value (default: false)

## Returns:

Current boolean state

A toggle function to invert the state

## Usage in ProductCard

Each product card uses useToggle(false) to control description visibility

Clicking Show / Hide Description toggles the product description

Description is conditionally rendered based on toggle state

event.stopPropagation() prevents toggle clicks from triggering card navigation

## Key Benefits

Reusable across multiple UI components

Cleaner than managing multiple boolean states

Improves readability and maintainability

Follows React best practices

This feature demonstrates effective use of custom hooks, controlled state management, and modular component design within the GROWW project structure.