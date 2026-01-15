# CODE SAFETY & COLLABORATION PROTOCOLS

1. **SURGICAL EDITS ONLY (STRICT)**

   - You are working in a MULTI-PERSON repository.
   - **NEVER** modify, refactor, or optimize existing working code unless explicitly requested.
   - Only touch the specific lines necessary to fulfill the prompt.
   - If a file is large, only output the specific function/block being changed.

2. **CROSS FILE INTEGRITY & STABILITY**

   - **MANDATORY CHECK:** Before applying changes, verify that your modifications do not break code in OTHER files or folders.
   - Ensure imports, type definitions, and variable references remain valid across the entire project structure.
   - Do not change shared utility functions if they are used by other components.

3. **PROJECT AWARENESS & SMART REUSE**
   - **AUTO DETECT STACK:** Read package.json or config files immediately to understand the stack.
   - **SCAN FIRST:** Before creating a new service/function, search the codebase (e.g., services/, utils/).
   - **REUSE:** If a function exists (e.g., pi.service.ts), IMPORT and USE IT.
