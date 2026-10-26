# ADR 001: Transition from Static Site to Containerized SSR Runtimme

## Status: 
Accepted (Date: 26-10-2026)

## Context
Our platform needs dynamic API endpoints ( /api/health, /api/feedback).
Static hosting on S3 can't execute server-side Node.js code.

## Decision
We will configure Astro with the '@astrojs/node' adapter in standalone mode and package the application as a Docker container.

## Consequences
Pros : Enables  live API routes, dynamic rendering, and operational health checks.
Cons : Increases operational complexity: requirescontainer compute runtime.


