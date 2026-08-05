import { createContactMessage, getAllContactMessages, getContactMessageById, deleteContactMessage, } from "../services/contact.service.js";
/**
 * Public
 * POST /api/contact
 */
export const submitContact = async (req, res) => {
    try {
        const { name, email, phone, subject, message, } = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: "Name, email and message are required.",
            });
        }
        const contact = await createContactMessage({
            name,
            email,
            phone,
            subject,
            message,
        });
        return res.status(201).json({
            success: true,
            message: "Message sent successfully.",
            data: contact,
        });
    }
    catch (error) {
        console.error("Contact API Error:", error);
        return res.status(500).json({
            success: false,
            error: error instanceof Error
                ? error.message
                : String(error),
        });
    }
};
/**
 * Admin
 * GET /api/contact
 */
export const getContacts = async (req, res) => {
    try {
        const contacts = await getAllContactMessages();
        return res.json({
            success: true,
            count: contacts.length,
            data: contacts,
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Failed to fetch contacts.",
        });
    }
};
/**
 * Admin
 * GET /api/contact/:id
 */
export const getContactById = async (req, res) => {
    try {
        const contact = await getContactMessageById(req.params.id);
        if (!contact) {
            return res.status(404).json({
                success: false,
                message: "Contact not found.",
            });
        }
        return res.json({
            success: true,
            data: contact,
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Failed to fetch contact.",
        });
    }
};
/**
 * Admin
 * DELETE /api/contact/:id
 */
export const deleteContact = async (req, res) => {
    try {
        await deleteContactMessage(req.params.id);
        return res.json({
            success: true,
            message: "Contact deleted successfully.",
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Failed to delete contact.",
        });
    }
};
//# sourceMappingURL=contact.controller.js.map