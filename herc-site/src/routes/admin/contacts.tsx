import { createFileRoute, redirect } from "@tanstack/react-router";

import { isAuthenticated } from "@/lib/auth";
import { Layout } from "@/components/admin/Layout";
import { ContactTable } from "@/components/admin/contacts/ContactTable";
import { useContacts } from "@/hooks/useContacts";

export const Route = createFileRoute("/admin/contacts")({
  beforeLoad: () => {
    if (!isAuthenticated()) {
      throw redirect({
        to: "/admin/login",
      });
    }
  },

  component: ContactsPage,
});

function ContactsPage() {
  const {
    data: contacts,
    isLoading,
    error,
  } = useContacts();

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">
            Contact Messages
          </h1>

          <p className="text-muted-foreground">
            Manage enquiries received from the website.
          </p>
        </div>

        {isLoading && (
          <div className="rounded-lg border p-8 text-center">
            Loading contacts...
          </div>
        )}

        {error && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-red-600">
            Failed to load contacts.
          </div>
        )}

        {!isLoading && !error && (
          <ContactTable contacts={contacts ?? []} />
        )}
      </div>
    </Layout>
  );
}