import {
  entityTableSelector,
  entityDetailsButtonSelector,
  entityDetailsBackButtonSelector,
  entityCreateButtonSelector,
  entityCreateSaveButtonSelector,
  entityCreateCancelButtonSelector,
  entityEditButtonSelector,
  entityDeleteButtonSelector,
  entityConfirmDeleteButtonSelector,
} from '../../support/entity';

describe('Notification e2e test', () => {
  const notificationPageUrl = '/notification';
  const notificationPageUrlPattern = new RegExp('/notification(\\?.*)?$');
  const username = Cypress.env('E2E_USERNAME') ?? 'user';
  const password = Cypress.env('E2E_PASSWORD') ?? 'user';
  const notificationSample = {
    date: '2023-01-25T18:28:10.457Z',
    sentDate: '2023-01-25T18:55:13.531Z',
    format: 'EMAIL',
    userId: 20600,
    productId: 75536,
  };

  let notification;

  beforeEach(() => {
    cy.login(username, password);
  });

  beforeEach(() => {
    cy.intercept('GET', '/services/notification/api/notifications+(?*|)').as('entitiesRequest');
    cy.intercept('POST', '/services/notification/api/notifications').as('postEntityRequest');
    cy.intercept('DELETE', '/services/notification/api/notifications/*').as('deleteEntityRequest');
  });

  afterEach(() => {
    if (notification) {
      cy.authenticatedRequest({
        method: 'DELETE',
        url: `/services/notification/api/notifications/${notification.id}`,
      }).then(() => {
        notification = undefined;
      });
    }
  });

  it('Notifications menu should load Notifications page', () => {
    cy.visit('/');
    cy.clickOnEntityMenuItem('notification');
    cy.wait('@entitiesRequest').then(({ response }) => {
      if (response.body.length === 0) {
        cy.get(entityTableSelector).should('not.exist');
      } else {
        cy.get(entityTableSelector).should('exist');
      }
    });
    cy.getEntityHeading('Notification').should('exist');
    cy.url().should('match', notificationPageUrlPattern);
  });

  describe('Notification page', () => {
    describe('create button click', () => {
      beforeEach(() => {
        cy.visit(notificationPageUrl);
        cy.wait('@entitiesRequest');
      });

      it('should load create Notification page', () => {
        cy.get(entityCreateButtonSelector).click();
        cy.url().should('match', new RegExp('/notification/new$'));
        cy.getEntityCreateUpdateHeading('Notification');
        cy.get(entityCreateSaveButtonSelector).should('exist');
        cy.get(entityCreateCancelButtonSelector).click();
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response.statusCode).to.equal(200);
        });
        cy.url().should('match', notificationPageUrlPattern);
      });
    });

    describe('with existing value', () => {
      beforeEach(() => {
        cy.authenticatedRequest({
          method: 'POST',
          url: '/services/notification/api/notifications',
          body: notificationSample,
        }).then(({ body }) => {
          notification = body;

          cy.intercept(
            {
              method: 'GET',
              url: '/services/notification/api/notifications+(?*|)',
              times: 1,
            },
            {
              statusCode: 200,
              headers: {
                link: '<http://localhost/services/notification/api/notifications?page=0&size=20>; rel="last",<http://localhost/services/notification/api/notifications?page=0&size=20>; rel="first"',
              },
              body: [notification],
            }
          ).as('entitiesRequestInternal');
        });

        cy.visit(notificationPageUrl);

        cy.wait('@entitiesRequestInternal');
      });

      it('detail button click should load details Notification page', () => {
        cy.get(entityDetailsButtonSelector).first().click();
        cy.getEntityDetailsHeading('notification');
        cy.get(entityDetailsBackButtonSelector).click();
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response.statusCode).to.equal(200);
        });
        cy.url().should('match', notificationPageUrlPattern);
      });

      it('edit button click should load edit Notification page and go back', () => {
        cy.get(entityEditButtonSelector).first().click();
        cy.getEntityCreateUpdateHeading('Notification');
        cy.get(entityCreateSaveButtonSelector).should('exist');
        cy.get(entityCreateCancelButtonSelector).click();
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response.statusCode).to.equal(200);
        });
        cy.url().should('match', notificationPageUrlPattern);
      });

      it('edit button click should load edit Notification page and save', () => {
        cy.get(entityEditButtonSelector).first().click();
        cy.getEntityCreateUpdateHeading('Notification');
        cy.get(entityCreateSaveButtonSelector).click();
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response.statusCode).to.equal(200);
        });
        cy.url().should('match', notificationPageUrlPattern);
      });

      it('last delete button click should delete instance of Notification', () => {
        cy.get(entityDeleteButtonSelector).last().click();
        cy.getEntityDeleteDialogHeading('notification').should('exist');
        cy.get(entityConfirmDeleteButtonSelector).click();
        cy.wait('@deleteEntityRequest').then(({ response }) => {
          expect(response.statusCode).to.equal(204);
        });
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response.statusCode).to.equal(200);
        });
        cy.url().should('match', notificationPageUrlPattern);

        notification = undefined;
      });
    });
  });

  describe('new Notification page', () => {
    beforeEach(() => {
      cy.visit(`${notificationPageUrl}`);
      cy.get(entityCreateButtonSelector).click();
      cy.getEntityCreateUpdateHeading('Notification');
    });

    it('should create an instance of Notification', () => {
      cy.get(`[data-cy="date"]`).type('2023-01-25T01:57').blur().should('have.value', '2023-01-25T01:57');

      cy.get(`[data-cy="details"]`).type('firewall multimedia').should('have.value', 'firewall multimedia');

      cy.get(`[data-cy="sentDate"]`).type('2023-01-25T11:36').blur().should('have.value', '2023-01-25T11:36');

      cy.get(`[data-cy="format"]`).select('SMS');

      cy.get(`[data-cy="userId"]`).type('79811').should('have.value', '79811');

      cy.get(`[data-cy="productId"]`).type('61070').should('have.value', '61070');

      cy.get(entityCreateSaveButtonSelector).click();

      cy.wait('@postEntityRequest').then(({ response }) => {
        expect(response.statusCode).to.equal(201);
        notification = response.body;
      });
      cy.wait('@entitiesRequest').then(({ response }) => {
        expect(response.statusCode).to.equal(200);
      });
      cy.url().should('match', notificationPageUrlPattern);
    });
  });
});
