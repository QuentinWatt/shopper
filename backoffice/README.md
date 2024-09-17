# Shopper Backoffice

This directory contains the shopper backoffice. This project manages the the shop and is accessible by shopper admins and staff.

## Why a Vite in a different project folder?

All functionality of the Backoffice is behind an authorization wall. This means it does not require SEO, and can be run as a "lighter" project in terms of SSR. This setup is a practice of "separation of concerns", allowing the backoffice and the storefront to be built and managed by different teams in future, without being tightly coupled.
