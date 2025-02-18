export function Footer() {
    return (
        <footer className="border-t bg-muted/50">
            <div className="flex h-16 w-full items-center justify-center">
                <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Notes44. All rights reserved.</p>
            </div>
        </footer>
    );
}
