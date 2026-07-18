import { forwardRef } from 'react';
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';
import { Link, type LinkProps } from 'react-router-dom';

type ButtonVariant = 'primary' | 'gold' | 'ghost' | 'outline';

interface SharedProps {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
}

type AsButton = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> & {
    to?: undefined;
    href?: undefined;
  };

type AsRouterLink = SharedProps &
  Omit<LinkProps, 'className' | 'children'> & {
    to: LinkProps['to'];
  };

type AsAnchor = SharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children' | 'href'> & {
    href: string;
    to?: undefined;
  };

type ButtonProps = AsButton | AsRouterLink | AsAnchor;

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>((props, ref) => {
  const { variant = 'primary', children, className = '', ...rest } = props;
  const cls = `btn btn-${variant} ${className}`;

  if ('to' in rest && rest.to !== undefined) {
    const { to, ...linkRest } = rest as Omit<AsRouterLink, keyof SharedProps>;
    return (
      <Link to={to} className={cls} ref={ref as React.Ref<HTMLAnchorElement>} {...linkRest}>
        {children}
      </Link>
    );
  }

  if ('href' in rest && rest.href !== undefined) {
    const { href, ...anchorRest } = rest as Omit<AsAnchor, keyof SharedProps>;
    return (
      <a href={href} className={cls} ref={ref as React.Ref<HTMLAnchorElement>} {...anchorRest}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} ref={ref as React.Ref<HTMLButtonElement>} {...(rest as AsButton)}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';
export default Button;
