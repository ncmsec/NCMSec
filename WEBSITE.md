# ncmsec portfolio

A static rebuild of Nicole Mullen’s existing Hostinger portfolio, prepared for GitHub Pages. The publishable website is entirely inside `site/`. No npm installation or build step is required.

## Preview

Run `npm run dev` and open http://127.0.0.1:4173/. Run `npm run check` to validate internal links and assets.

Edit the HTML files directly. Shared styles and mobile navigation live in `site/assets/style.css` and `site/assets/main.js`. Each page is a real HTML document and can be read without JavaScript. JavaScript adds the mobile menu and project filters.

The one-time `scripts/create-site.mjs` migration helper requires the ignored `.migration` snapshots and overwrites page HTML. It is not a build step and is not needed for hosting or regular editing.

## Publish on GitHub Pages

Selected repository: https://github.com/ncmsec/NCMSec

The repository is public and was empty when checked on October 12, 2026. Its default branch is `main`. Before the custom-domain switch, the expected Pages address is https://ncmsec.github.io/NCMSec/ (this is not a confirmed deployment yet).

1. Create or choose a GitHub repository. GitHub Free supports Pages from public repositories; keeping repository source private requires an eligible paid plan. Review the files before uploading.
2. Push this project to the repository’s `main` branch.
3. In repository Settings → Pages, set the source to **GitHub Actions**. The included workflow validates and deploys only `site/`.
4. Check the deployed `github.io` preview before changing the live domain.
5. Verify ownership of `ncmsec.com` under your GitHub account’s Pages settings. Then set `ncmsec.com` as the repository’s custom domain before updating DNS.
6. Update the website DNS records with the domain provider according to the current GitHub documentation. Preserve email MX, SPF, DKIM, and DMARC records. Keep the domain registered and keep any needed email subscription active.
7. Once DNS and HTTPS are working, check all pages, downloads, and mail delivery. Then cancel only the Hostinger web hosting service that is no longer needed.

Official instructions: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## Content review before launch

- The original About page describes the master’s program as **Digital Forensics**; the original Résumé page says **Cybersecurity**. Those source statements are preserved pending confirmation.
- The résumé download is the PDF already published on the old website. A newer local GRC résumé was not substituted automatically.
- The PORP article is dated April 2, 2026; the credential lists issuance on April 3, 2026. Both are copied from the source.
- The three case studies preserve their original text. Some headings were reordered to match the paragraphs they describe because Hostinger’s visual layout had a different DOM reading order.
- Project pages retain their existing slugs; GitHub Pages serves their directory URLs with a trailing slash.
- All site images, certificates, and downloads are local. Typography uses Google Fonts with system-font fallbacks.
- Original analytics were not copied into the preview.

The rebuild is being published to `ncmsec/NCMSec`. Domain records, the Hostinger subscription, and email settings remain unchanged. The custom-domain switch is a separate step after preview review.
