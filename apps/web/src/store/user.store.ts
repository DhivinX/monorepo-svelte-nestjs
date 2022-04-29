import { derived, Writable, writable } from 'svelte/store';
import { Api, ResponseError } from '../api';

class UserStore {
    authorized: Writable<boolean> = writable(false);
    email: Writable<string> = writable('');
    firstName: Writable<string> = writable('');
    lastName: Writable<string> = writable('');

    async login(email: string, password: string): Promise<boolean> {
        try {
            const res = await Api.auth.login({
                email: email,
                password: password,
            });

            this.authorized.set(true);
            this.email.set(res.data.email);
            this.firstName.set(res.data.firstName);
            this.lastName.set(res.data.lastName);

            return true;
        } catch (e) {
            if (e instanceof ResponseError) {
                console.log(e);
            }
        }

        return false;
    }

    get fullName() {
        return derived(
            [this.firstName, this.lastName],

            ([$fistname, $lastname]) => {
                return `${$fistname} ${$lastname}`;
            }
        );
    }
}

export const userStore = new UserStore();
