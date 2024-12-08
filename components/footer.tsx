import Link from "next/link";

export function Footer() {
    const footerLinks = {
        about: [
            { label: "How it works", href: "#" },
            { label: "Featured", href: "#" },
            { label: "Partnership", href: "#" },
            { label: "Bussiness Relation", href: "#" },
        ],
        community: [
            { label: "Events", href: "#" },
            { label: "Blog", href: "#" },
            { label: "Podcast", href: "#" },
            { label: "Invite a friend", href: "#" },
        ],
        socials: [
            { label: "Discord", href: "#" },
            { label: "Instagram", href: "#" },
            { label: "Twitter", href: "#" },
            { label: "Facebook", href: "#" },
        ],
    };

    return (
        <footer className="border-t bg-white">
            <div className="container mx-auto px-4 py-12">
                <div className="flex justify-between flex-wrap">
                    <div className="space-y-4">
                        <Link
                            href="/"
                            className="text-2xl font-bold text-primary-500"
                        >
                            MORENT
                        </Link>
                        <p className="text-secondary-300 max-w-xs">
                            Our vision is to provide convenience and help
                            increase your sales business.
                        </p>
                    </div>
                    <div className="flex flex-row gap-36">
                        <div className="space-y-4 ">
                            <h3 className="text-lg font-semibold">About</h3>
                            <ul className="space-y-2">
                                {footerLinks.about.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-secondary-300 hover:text-secondary-400"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-4 ">
                            <h3 className="text-lg font-semibold">Community</h3>
                            <ul className="space-y-2">
                                {footerLinks.community.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-secondary-300 hover:text-secondary-400"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-4 ">
                            <h3 className="text-lg font-semibold">Socials</h3>
                            <ul className="space-y-2">
                                {footerLinks.socials.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-secondary-300 hover:text-secondary-400"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t">
                    <p className="text-secondary-300">
                        ©2022 MORENT. All rights reserved
                    </p>
                    <div className="flex gap-8">
                        <Link
                            href="#"
                            className="text-secondary-300 hover:text-secondary-400"
                        >
                            Privacy & Policy
                        </Link>
                        <Link
                            href="#"
                            className="text-secondary-300 hover:text-secondary-400"
                        >
                            Terms & Condition
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
