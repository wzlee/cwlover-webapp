Ext.define('cwlover.controller.VarietyController',{
	extend: 'Ext.app.Controller',

    config: {
        refs: {
            varietyList: 'varietylist',
            showVariety: 'varietydetail'
        },

        control: {
            varietylist: {
                push: 'onMainPush',
                pop: 'onMainPop'
            },
            varietyList: {
                itemtap: 'onVarietySelect'
            }
        }
    },

    onMainPush: function(view, item) {
        var editButton = this.getEditButton();

        if (item.xtype == "contact-show") {
            this.getContacts().deselectAll();

            this.showEditButton();
        } else {
            this.hideEditButton();
        }
    },

    onMainPop: function(view, item) {
        if (item.xtype == "contact-edit") {
            this.showEditButton();
        } else {
            this.hideEditButton();
        }
    },

    onContactSelect: function(list, index, node, record) {
        var editButton = this.getEditButton();

        if (!this.showContact) {
            this.showContact = Ext.create('AddressBook.view.contact.Show');
        }

        // Bind the record onto the show contact view
        this.showContact.setRecord(record);

        // Push the show contact view into the navigation view
        this.getMain().push(this.showContact);
    },

    onContactEdit: function() {
        if (!this.editContact) {
            this.editContact = Ext.create('AddressBook.view.contact.Edit');
        }

        // Bind the record onto the edit contact view
        this.editContact.setRecord(this.getShowContact().getRecord());

        this.getMain().push(this.editContact);
    },

    onContactChange: function() {
        this.showSaveButton();
    },

    onContactSave: function() {
        var record = this.getEditContact().saveRecord();

        this.getShowContact().updateRecord(record);

        this.getMain().pop();
    },

    showEditButton: function() {
        var editButton = this.getEditButton();

        if (!editButton.isHidden()) {
            return;
        }

        this.hideSaveButton();

        editButton.show();
    },

    hideEditButton: function() {
        var editButton = this.getEditButton();

        if (editButton.isHidden()) {
            return;
        }

        editButton.hide();
    },

    showSaveButton: function() {
        var saveButton = this.getSaveButton();

        if (!saveButton.isHidden()) {
            return;
        }

        saveButton.show();
    },

    hideSaveButton: function() {
        var saveButton = this.getSaveButton();

        if (saveButton.isHidden()) {
            return;
        }

        saveButton.hide();
    }
});