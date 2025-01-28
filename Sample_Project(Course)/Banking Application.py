'''
Banking application
'''

'''
dic={'dinga':1234,'dingi':4567}
dic_amount={'dinga':1000,'dingi':500}
dic_pin={'dinga':1111,'dingi':2222}

# user_name_password={'dinga':1234,'dingi':4567}
# user_name_amount={'dinga':1000,'dingi':500}
# user_name_pin={'dinga':1111,'dingi':2222}


print('\t\t\t\t\t\t\t\t\t\t\t\t\t\tWelcome To Bank' )
print('\t\tChoose the option')

print('\t\t\t\t\t\t1.Account already exists')
print('\t\t\t\t\t\t2.Create a new account')
option=int(input('Enter the given options:'))
if option==1:
    user_name=input('User_name:')
    password=int(input('Password:'))
    for user_name in dic:
        # print(dic)
        # print(len(dic))
        if dic[user_name]==password:
            # print('\t\t\tDone')
            print(f'\t\tWelcome {user_name}')
            print('\t\tHomepage')
            print('Choose the given option')
            print('1.Deposit\n'
                  '2.Withdraw\n'
                  '3.Balance check')
            option1=int(input('Enter the option:'))
            if option1==1:
                print('\t\tDeposit')
                # user_name=input('Enter:')
                pin=int(input('Enter the pin:'))
                # user_name=input('Enter the username:')
                for pins in dic_pin:
                    if dic_pin[user_name]==pin:
                        print()
                        # print('Yes')
                        amount=int(input('Enter the amount:'))
                    for user_name in dic_amount:
                        # if dic[user_name]==dic_amount:
                        if dic_pin[user_name]==pin:
                            a=dic_amount[user_name]
                            b=a+amount
                            c=dic_amount[user_name]
                            # dic_amount[user_name]=c
                            # print(dic_amount)
                            print(b)
                            print(f'\t\t\tAmount Credited')
                            break
                            # print(c)
                            # print(dic_amount)
                    else:
                        print('Invalid Pin....')
                        break
            elif option1==2:
                print('\t\tWithdraw')
                pin=int(input('Enter the pin:'))
                for pins in dic_pin:
                    if dic_pin[user_name]==pin:
                        print()
                        # print('Yes')
                        amount=int(input('Enter the amount:'))
                for user_name in dic_amount:
                    if amount<=dic_amount[user_name]:
                        a=dic_amount[user_name]-amount
                        print(f'your withdraw amount - {amount}')
                        print()
                        # print(a)
                        print('\t\t\t\t\tAmount Withdraw')

                        # print('Yes')
                        # print(dic_amount[user_name])
                        break
                    else:
                        print('withdraw Amount is more than balance amount')
                        break
            elif option1==3:
                print('\t\tBalance Check')
                pin=int(input('Enter the pin:'))
                for pins in dic_pin:
                    if dic_pin[user_name]==pin:
                        print()
                        print(dic_amount[user_name])
                        break
                    else:
                        print('Invalid Pin')
            else:
                print('Invalid Number')




        else:
            print('Incorrect username or password')
            break
#                 print('1.Back to sign up')
# c=int(input('Enter:'))
# if option==1:
#     pass
# if dic[user_name] != password:
elif option==2:
    print('\t\t\tCreate a new account')
    user_name=input('user_name:')
    password=int(input('password:'))
    dic[user_name]=password
    print('\t\t\tAccount created.....')
else:
    print('Invalid Number')






# a=input('user_name:')
# b=input('Password')
'''


dic={'dinga':1234,'dingi':4567}
dic_amount={'dinga':1000,'dingi':500}
dic_pin={'dinga':1111,'dingi':2222}

def login():
    pass
print('\t\t\t\tWelcome to python bank')
print('1.Signup\n'
      '2.Login')
option=int(input('Enter the option:'))
if option==2:
    for user_name in dic:
        if dic[user_name]==password:
            print('Welcome to home page')
            print('1.Deposit\n'
                  '2.Withdraw\t'
                  '3.Balance Check')
        else:
            print('Invalid User_name or password')
            break
        break
return(user_name=input('Enter the user_name:'))
return(password=int(input('enter the password:')))

    option1=int(input('Enter the given option:'))
    if option1==1:
        pin=int(input('enter the pin:'))

