import { Trash2, Eye, Mail } from "lucide-react";

interface Contact {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  createdAt: string;
}

interface ContactTableProps {
  contacts: Contact[];
}

export function ContactTable({
  contacts,
}: ContactTableProps) {
  if (contacts.length === 0) {
    return (
      <div className="rounded-xl border bg-card p-10 text-center">
        <Mail
          size={48}
          className="mx-auto mb-4 text-muted-foreground"
        />

        <h2 className="text-xl font-semibold">
          No Contact Messages
        </h2>

        <p className="mt-2 text-muted-foreground">
          Contact messages submitted from the website will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border bg-card shadow-sm">
      <table className="w-full">
        <thead className="bg-muted">
          <tr>
            <th className="px-6 py-4 text-left">Name</th>
            <th className="px-6 py-4 text-left">Email</th>
            <th className="px-6 py-4 text-left">Subject</th>
            <th className="px-6 py-4 text-left">Date</th>
            <th className="px-6 py-4 text-center">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((contact) => (
            <tr
              key={contact.id}
              className="border-t"
            >
              <td className="px-6 py-4">
                {contact.name}
              </td>

              <td className="px-6 py-4">
                {contact.email}
              </td>

              <td className="px-6 py-4">
                {contact.subject || "—"}
              </td>

              <td className="px-6 py-4">
                {new Date(contact.createdAt).toLocaleDateString()}
              </td>

              <td className="px-6 py-4">
                <div className="flex justify-center gap-2">
                  <button
                    type="button"
                    className="rounded-lg bg-blue-600 p-2 text-white transition hover:bg-blue-700"
                    title="View"
                  >
                    <Eye size={18} />
                  </button>

                  <button
                    type="button"
                    className="rounded-lg bg-red-600 p-2 text-white transition hover:bg-red-700"
                    title="Delete"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}